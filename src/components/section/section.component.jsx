import React, { useState, useCallback, useEffect } from 'react';

import './section.styles.scss';

import SectionCard from '../section-card/section-card.component';

const Section = ({ genre }) => {

    const [movies, setMovies] = useState([]);
    const [pageState, setPageState] = useState(null);

    const fetchData = useCallback(
        async () => {
            const response = await fetch('/.netlify/functions/getMovies', {
                method: 'POST',
                body: JSON.stringify({ genre: genre, pageState: pageState }),
            })
            const responseBody = await response.json()
            setMovies(responseBody.data.movies_by_genre.values)
            setPageState(responseBody.data.movies_by_genre.pageState)
            console.log('Y              :   ' + responseBody.data.movies_by_genre.pageState);
        },
        [genre, pageState],
    );

    const onClickHandler = () => {
        setPageState(pageState);
        fetchData();
    };

    useEffect(() => fetchData(), [fetchData]);

    return (
        <div className='section-container'>
            <h2 id={ genre }>{ genre }</h2>
            {
                movies && (
                    <div className='section'>
                        <div className='movie-section'>
                            {
                                movies.map(
                                    (movie, index) => (
                                        <SectionCard
                                            key={ `${movie.year}-${movie.duration}-${index}` }
                                            movie={ movie }
                                        />
                                    )
                                )
                            }
                        </div>
                        <div
                            className='more-button'
                            onClick={ onClickHandler }
                        >
                            <i className='fas fa-angle-right'></i>
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default Section;