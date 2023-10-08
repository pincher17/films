import React from 'react';
import { FooterWrap } from './Footer.styles';
import { useAppSelector } from '../../hook';

const Footer: React.FC = () =>{
    const showFooter = useAppSelector(state => state.footer.ShowFooter);
    return (
        <FooterWrap show={showFooter}>
            <p>Связаться с разработчиком</p>
            <a href="https://t.me/andrepechen" target="_blank" rel="noopener noreferrer">Telegram</a>
        </FooterWrap>
    )
}

export default Footer;