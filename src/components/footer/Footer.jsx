import React from 'react'
import '../footer/Footer.scss'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useTranslation } from 'react-i18next';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className="container footer--container">
                <ul>
                    <AnchorLink href="#scroll1">
                        {t("nav1")}
                    </AnchorLink>
                    <AnchorLink href="#scroll2">
                        {t("nav2")}
                    </AnchorLink>
                    <AnchorLink href="#scroll3">
                        {t("nav3")}
                    </AnchorLink>
                </ul>
                <ul>
                    <a href="tel:+998977260528">
                    <LocalPhoneIcon />
                        +998 (97) 726-05-28
                    </a>
                    <a href="https://www.instagram.com/orchidee_pharm/">
                        <InstagramIcon />
                        Instagram
                    </a>
                    <a href="/">
                        <TelegramIcon />
                        Telegram
                    </a>
                </ul>
            </div>
        </footer>
    )
}

export default Footer