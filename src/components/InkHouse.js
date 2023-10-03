import React from 'react';
import InkHouseScreen from '../img/marinanogovitsyna.github.io_Ink-House_ (2).png'

const InkHouse = () => {
    return (
        <section className='ink-house'>
            <div className='ink-house-container'>
                <div>
                    <div className='container-of-screen'>
                        <img src={InkHouseScreen} className='screen'/>
                    </div>
                    <div>
                        <span>
                            Ink House - пример интернет-магазина реплик известных картин. 
                            Реализован основной функционал просмотра работ по странам. 
                            Адаптивная верстка с нуля по макету из Figma на 4 устройства.
                        </span>
                        <button className='btn-visit'>
                            <a target='_blank' href='https://marinanogovitsyna.github.io/Ink-House/'>Visit Site</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InkHouse;