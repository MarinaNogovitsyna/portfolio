import React from 'react';
import myPhoto from '../img/PeGFtNTpiVQ.jpg'

const About = () => {
    return (
        <main id='main'>
           <div className='container-about'>
                <img src={myPhoto}/>
                <div className='about-me'> 
                    <span>
                        Приветствую! Я - молодой и амбициозный frontend-разработчик, 
                        готовый взяться за любые технические вызовы и покорить вершины кодинга!
                    </span>
                    <span>
                        Хотя мой опыт в этой области пока еще небольшой, 
                        я не собираюсь останавливаться на достигнутом. 
                        Моя страсть к знаниям и стремление к совершенству будут моими верными 
                        спутниками в мире веб-разработки. Я готова учиться на примерах и 
                        извлекать уроки из каждого проекта, чтобы стать настоящим мастером своего дела.
                    </span>
                    {/* <span>
                        Моя цель - создавать красивые, функциональные и интуитивно понятные 
                        пользовательские интерфейсы. Я хочу делать веб-сайты, которые будут 
                        радовать глаз и удивлять своей эффективностью. 
                    </span> */}
                    <span>
                        Так что, если вы ищете молодого, но амбициозного frontend-разработчика, 
                        который готов преодолеть любые технические вызовы, то я готова взяться за работу! 
                        Дайте мне шанс показать свой потенциал, и вы не пожалеете.
                    </span>
                </div>
            </div> 
        </main>
    );
};

export default About;