import React from 'react';
import SimpleScreen from '../img/marinanogovitsyna.github.io_Simple_.png';

const Simple = () => {
    return (
        <section id='simple' className='simple'>
            <div className='simple-container'>
                <div>
                    <span>
                        Еще одна верстка, но пока только на десктоп (решила немного попрактиковаться, взяла макет Figma).
                    </span>
                    <button className='btn-visit'>
                        <a target='_blank' href='https://marinanogovitsyna.github.io/Simple/'>Visit Site</a>
                    </button>
                </div>
                <div className='container-of-screen'>
                    <img src={SimpleScreen} className='simple-screen'/>
                </div>
            </div>
        </section>
    );
};

export default Simple;