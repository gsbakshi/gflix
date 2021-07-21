import React, { useState } from 'react';

import './section-card.styles.scss';

const SectionCard = ({ movie }) => {
    
    const [isShown, setIsShown] = useState(false)

    const onShow = () => setIsShown(true);
    const onHide = () => setIsShown(false);

    return (
        <div
            className='card-container'
            onMouseEnter={ onShow }
            onMouseLeave={ onHide }
        >
            <div className='card'>
                {
                    !isShown && (
                        <video className='video'>
                            <source src={ movie.thumbnail } type='video/mp4' />
                        </video>
                    )
                }
                {
                    isShown && (
                        <>
                            <video className='video' autoPlay={ true } loop>
                                <source src={ movie.thumbnail } type='video/mp4' />
                            </video>
                            <div className='info-box'>
                                <h5>{ movie.title }</h5>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default SectionCard;