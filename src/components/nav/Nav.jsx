import React from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import '../nav/Nav.scss'
import logo from '../../assets/logo.png'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useCart } from 'react-use-cart';

const Nav = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const { items } = useCart();

    return (
        <>
            <nav className="nav--top">
                <div className="container nav--container--top">
                    <ul className='nav--info'>
                        <AnchorLink href='#scroll1'>
                            {t("nav1")}
                        </AnchorLink>
                        <AnchorLink href='#scroll2'>
                            {t("nav2")}
                        </AnchorLink>
                        <AnchorLink href='#scroll3'>
                            {t("nav3")}
                        </AnchorLink>
                    </ul>
                    <div className="dropdown">
                        <input type="checkbox" id="dropdown" />
                        <label className='dropdown' htmlFor="dropdown">
                            {t("nav4")}
                        </label>
                        <ul className='dropdown--menu'>
                            <li className='language' onClick={() => changeLanguage("uz")}>
                                <img src="https://maxway.uz/images/uz.svg" alt="" />
                                UZ
                            </li >
                            <li className='language border--li' onClick={() => changeLanguage("rus")}>
                                <img src="https://maxway.uz/images/ru.svg" alt="" />
                                RU
                            </li>
                            <li className='language' onClick={() => changeLanguage("eng")}>
                                <img src="https://maxway.uz/images/en.svg" alt="" />
                                ENG
                            </li>
                            <span></span>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className='nav--center'>
                <div className="container nav--container--center">
                    <NavLink to="/" className="nav--logo">
                        <img src={logo} alt="" />
                    </NavLink>
                    <NavLink to="/cart" className='nav--shop'>
                        <LocalGroceryStoreIcon />
                        <p className='nav--count'>
                        {items.length}
                        </p>
                    </NavLink>
                    <input type="checkbox" id="check1" />
                    <label htmlFor="check1" className='check1'>
                        <MenuIcon />
                    </label>
                    <ul className='nav--info'>
                        <AnchorLink href='#scroll1'>
                            {t("nav1")}
                        </AnchorLink>
                        <hr />
                        <AnchorLink href='#scroll2'>
                            {t("nav2")}
                        </AnchorLink>
                        <hr />
                        <AnchorLink href='#scroll3'>
                            {t("nav3")}
                        </AnchorLink>
                        <hr />
                        <input type="checkbox" name="language" id="language" />
                        <label htmlFor="language">
                            {t("nav4")}
                        </label>
                        <ul className='language--menu'>
                            <hr />
                            <li className='language' onClick={() => changeLanguage("uz")}>
                                <img src="https://maxway.uz/images/uz.svg" alt="" />
                                UZ
                            </li >
                            <hr />
                            <li className='language border--li' onClick={() => changeLanguage("rus")}>
                                <img src="https://maxway.uz/images/ru.svg" alt="" />
                                RU
                            </li>
                            <hr />
                            <li className='language' onClick={() => changeLanguage("eng")}>
                                <img src="https://maxway.uz/images/en.svg" alt="" />
                                ENG
                            </li>
                            <span></span>
                        </ul>
                    </ul>
                </div>
            </nav>
            <nav className="nav--bottom">
                <div className="container nav--container--bottom">
                    <a href='tel:+998977260528' className="nav--link--pages">
                    <LocalPhoneIcon />
                    </a>
                    <NavLink to="/" className="nav--link--pages">
                        <HomeIcon />
                    </NavLink>
                    <NavLink to="/cart" className="nav--link--pages">
                        <div className="nav--shop">
                            <LocalGroceryStoreIcon />
                            <p className='nav--count'>
                            {items.length}
                            </p>
                        </div>
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default Nav