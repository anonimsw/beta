import React from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import '../cartnote/Cartnote.scss'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Cartnote = () => {

    const { t } = useTranslation();

    return (
        <div className="cart--none">
            <LocalGroceryStoreIcon />
            <p>
                {t("order10")}
                <br />
                <NavLink to='/'>
                    {t("order11")}
                </NavLink>
            </p>
        </div>
    )
}

export default Cartnote