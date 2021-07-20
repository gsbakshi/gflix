import React, {useState, useCallback, useEffect} from 'react';

import './genres-list.styles.scss';

import Section from '../section/section.component';

const GenresList = () => {

    const genreIncrement = 4;
    const [genres, setGenres] = useState();
    const [limit, setLimit] = useState(genreIncrement);

    const fetchData = useCallback(
        async () => {
            const response = await fetch('/.netlify/functions/getGenres', {
                method: "POST",
                body: limit,
            })
            const responseBody = await response.json();
            setGenres(responseBody.data.reference_list.values);
        },
        [limit],
    );

    useEffect(() => fetchData(), [fetchData, setLimit]);

    console.log(limit);
    console.log(genres);

    const onPageEnd = () => {
        if (!(limit <= genres.length)) {
            return;
        }
        setLimit(limit + genreIncrement);
    };

    return (
        <div className='genres-container'>
            {
                genres && (
                    <div className='genres'>
                        {
                            Object.values(genres).map(
                                genre => (
                                    <Section
                                        key={ genre.value }
                                        genre={ genre.value }
                                    />
                                )
                            )
                        }
                    </div>
                )
            }
            <div
                className='page-end'
                onMouseEnter={ onPageEnd }
            />
        </div >
    );
};

export default GenresList;