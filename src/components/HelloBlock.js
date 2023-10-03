import React from 'react';
import myFace from '../img/photo_2023-09-30_15-23-12 (2).jpg'

const HelloBlock = () => {
    return (
        <header id='hello'>
            <div>
                <div className='hello'>
                    <h1>Меня зовут Марина</h1>
                    <span>Я Frontend-разработчик</span>
                </div>
                <img src={myFace} className='my-face'></img>
            </div>
        </header>
    );
};

export default HelloBlock;