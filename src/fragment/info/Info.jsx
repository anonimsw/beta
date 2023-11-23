import React from 'react'
import '../info/Info.scss'
import logo from '../../assets/logo.png'
import { useTranslation } from 'react-i18next'

const Info = () => {
    const { t } = useTranslation();

    return (
        <div className='info' id='scroll3'>
            <h1>
                {t("nav3")}
            </h1>
            <br />
            <br />
            <p>
                {t("info1")}
            </p>
            <br />
            <p>
                {t("info2")}
            </p>
            <br />
            <p>
                {t("info3")}
            </p>
            <br />
            <p>
                {t("info4")}
            </p>
            <br />
            <p>
                {t("info5")}
            </p>
            <img src={logo} alt="" />
        </div>
    )
}

export default Info