import React from 'react';

import './genres-list.styles.scss';

import Section from '../section/section.component';

const GenresList = ({ genres, limit, onPageEnd }) => (
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
        {
            genres && limit <= genres.length && (
                <div className='page-end' onMouseOver={ onPageEnd } />
            )
        }
    </div >
);

export default GenresList;