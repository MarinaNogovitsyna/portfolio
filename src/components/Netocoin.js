import React from 'react';
import gif from '../img/Анимация.gif'

const Netocoin = () => {
    return (
        <div>
            <section className='netocoin'>
            <div className='netocoin-container'>
                <div>
                    <span>
                        В рамках учебного проекта был доработан функционал сайта для работы с валютами.
                        На JavaScript была добавлена возмжность регистрации и авторизации на сайте,
                        с помощью API-запросов был добавлен функционал пополнения баланса, 
                        конвертаци и перевода валют. Также реализовано добавление пользователей и 
                        обновление текущего курса валют в реальном времени.
                    </span>
                    <button className='btn-visit'>
                        <a target='_blank' href='https://github.com/MarinaNogovitsyna/bjs-diplom'>Visit Site</a>
                    </button>
                </div>
                <div className='container-of-gif'>
                    <img src={gif} className='gif-screen'/>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Netocoin;