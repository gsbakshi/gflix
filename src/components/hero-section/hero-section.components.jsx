import React, {useState, useEffect} from 'react';

import './hero-section.styles.scss';

const HeroSection = () => {
    
    const [movie, setMovie] = useState();
    const pageState = null;

    const fetchData = async () => {
        const response = await fetch("/.netlify/functions/getMovies", {
            method: "POST",
            body: JSON.stringify({ genre: "Sci-Fi", pageState: pageState }),
        });
        const responseBody = await response.json();
        const movies = responseBody.data.movies_by_genre.values;
        setMovie(movies[Math.floor(Math.random() * movies.length)]);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {
                movie && (
                    <div className='hero-container'>
                        <video muted autoPlay={ true } loop>
                            <source src={ movie.thumbnail } type="video/mp4" />
                        </video>
                        <div className='info-section-container'>
                        <div className='info-section'>
                            <h2>{ movie.title }</h2>
                            <span>{ movie.synopsis }</span>
                            <div className="button-section">
                                <div className="button play">
                                    <span>
                                        <i className="fas fa-play"></i>
                                    </span>
                                    Play
                                </div>
                                <div className="button more">
                                    <span>
                                        <i className="fas fa-info-circle"></i>
                                    </span>
                                    More info
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default HeroSection;