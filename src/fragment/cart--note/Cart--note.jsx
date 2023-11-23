import React from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import '../cart--note/Cart--note.scss'
import { NavLink } from 'react-router-dom';

const Cartnote = () => {
    return (
        <div className="cart--none">
            <LocalGroceryStoreIcon />
            <p>
                Ваша корзина пуста
                <br />
                <NavLink to='/'>
                    Начните покупки на главной странице
                </NavLink>
            </p>
        </div>
    )
}

export default Cartnote