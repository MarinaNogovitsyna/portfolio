import React from 'react';
import tac1 from '../img/tac1.png';
import tac2 from '../img/tac2.png';
import tac3 from '../img/tac3.png';
import Slider from './Slider';

const Game = () => {
    const slides = [
        tac1,
        tac2,
        tac3
      ];
    return (
        <section className='game'>
            <div className='game-container'>
                <div>
                    <div className='all-slides'>
                        <Slider slides={slides}/>
                    </div>
                    <div>
                        <span>
                            В рамках учебного проекта доработала функционал игры "Крестики-нолики" на JS.
                        </span>
                        <button className='btn-visit'>
                            <a target='_blank' href='https://marinanogovitsyna.github.io/tic-tac-toe-game/'>Visit Site</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Game;