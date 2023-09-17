import React from 'react';
import { FooterWrap } from './Footer.styles';

const Footer: React.FC = () =>{

    return (
        <FooterWrap>
            <p>Связаться с разработчиком</p>
            <a href="https://t.me/andrepechen" target="_blank" rel="noopener noreferrer">Telegram</a>
        </FooterWrap>
    )
}

export default Footer;