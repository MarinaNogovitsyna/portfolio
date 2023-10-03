import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='footer-container'>
                <div className='tel-email'>
                        <span>
                            Написать мне: 
                            <a href='mailto:marina.nogovitsyna.98@mail.ru'>
                                marina.nogovitsyna.98@mail.ru
                            </a>
                        </span>
                        <span>
                            Позвонить мне: 
                            <a href='tel:+79961840058'>
                                +7(996)184-00-58
                            </a>
                        </span>
                </div>
                <div className='socials'>
                    <a href='https://github.com/MarinaNogovitsyna' target='_blank' className='link github'>
                        <BsGithub />
                    </a>
                    <a href='https://t.me/marinanogo' target='_blank' className='link telegram'>
                        <BsTelegram />
                    </a>
                    <a href='https://instagram.com/marinanogovitcyna?igshid=OGQ5ZDc2ODk2ZA==' target='_blank' className='link instagram'>
                        <BsInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;