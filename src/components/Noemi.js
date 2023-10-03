import React from 'react';
import NoemiScreen from '../img/marinanogovitsyna.github.io_Noemi_.png'

const Noemi = () => {
    return (
        <section id='noemi' className='noemi'>
            <h2>Примеры работ</h2>
            <div className='noemi-container'>
                <div>
                    <span>
                        Адаптивная верстка с нуля на 3 устройства. Noemi - пример тематического блога
                        с различными разделами и статьями.
                    </span>
                    <button className='btn-visit'>
                        <a target='_blank' href='https://marinanogovitsyna.github.io/Noemi/'>Visit Site</a>
                    </button>
                </div>
                <div className='container-of-screen'>
                    <img src={NoemiScreen} className='noemi-screen'/>
                </div>
            </div>
        </section>
    );
};

export default Noemi;