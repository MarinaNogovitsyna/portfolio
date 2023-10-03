import React from 'react';

 

const Navigation = () => {
    return (
        <nav>
            <div>
                <div className='logo'>Резюме</div>  
                <ul className='sections'>
                    <li><a href='#hello'>Главная</a></li>
                    <li><a href='#main'>Обо мне</a></li>
                    <li><a href='#noemi'>Работы</a></li>
                    <li><a href='#footer'>Связь</a></li>
                </ul>
          </div>
        </nav>
    );
};

export default Navigation;