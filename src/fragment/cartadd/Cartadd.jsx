import React, { useEffect, useState } from 'react'
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';
import "../cart--add/Cart--add.scss"
import axios from 'axios';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { t } from 'i18next';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context';

const Cartadd = () => {
    const { items, updateItemQuantity, removeItem, emptyCart } = useCart();
    let total = 0;
    // bot6105553670:AAEqlItJ8zxHQ25fF8u5dsD4Hy4ecOe01Nk
    //telegram
    const postTest = () => {
        axios.post(
            `https://api.telegram.org/bot6070246296:AAHPYBttQews9QtjwIRRPKf1V4aSh9ysrls/sendMessage?chat_id=-958292801&text=${encodeURIComponent(
                `<b>Zakazlar:</b>
    ${items.map((item) => {
                    return `                    
Mahsulot nomi: ${item.title}
                     
Mahsulot narxi: ${item.price} UZS
                    
Jami mahsulot soni : ${item.count} ta`;

                })
                    .join("")}        

Mijoz ismi: ${name}
            
Mijoz telefon nomeri: ${contact}
            
Mijoz manzili: ${address}

<b>Jami zakaz:</b> ${total} UZS`
            )}&parse_mode=html`
        )
            .then(() => {
                window.location.reload();
                emptyCart();
            })
    };
    //telegram

    // modal
    const [open, setOpen] = React.useState(false);
    const clickOpen = () => setOpen(true);
    const clickClose = () => setOpen(false);
    // modal

    const { name, address, contact, clicknameChange, clickaddressChange, clickcontactChange, writeToDatabase, } = React.useContext(Context);

    const { t } = useTranslation();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        borderRadius: "12px",
        p: 4,
    }

    return (
        <div className='cart--add--menu'>
            <div className="cart--add--all">
                {items?.map((item) => {
                    const priceCount = item.count * item.price;
                    total += priceCount;

                    if (item.count >= 1) {
                        return (
                            <div className="card--add" key={item._id}>
                                <img src={item.image} alt="" />
                                <NavLink to={`/products-title/${item.title}`} className='link--pages'>
                                    {t("order1")}
                                </NavLink>
                                <div className="card--item--text">
                                    <p className='title'>
                                        {item.title}
                                    </p>
                                    <ul>
                                        <p className='price'>
                                            {item.price} UZS
                                        </p>
                                        <div className="item--count">
                                            <button>
                                                <p className='count--minus'
                                                    onClick={() =>
                                                        updateItemQuantity(item.id, item.count--)
                                                    }
                                                >
                                                    -
                                                </p>
                                                <p className='count--total'>
                                                    {item.count}
                                                </p>
                                                <p className='count--plus'
                                                    onClick={() =>
                                                        updateItemQuantity(item.id, item.count++)
                                                    }
                                                >
                                                    +
                                                </p>
                                            </button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        );
                    } else {
                        removeItem(item.id);
                    }
                })}
            </div>
            <div className="cart--order">
                <ul className='products--order--info'>
                    <li>
                        {t("order2")}
                        <p>
                            {total}
                        </p>
                    </li>
                    <li>
                        {t("order3")}
                        <p>
                            {t("order4")}
                        </p>
                    </li>
                </ul>
                <hr />
                <ul>
                    <li>
                        {t("order5")}
                        <p>
                            {total} UZS
                        </p>
                    </li>
                    <button onClick={clickOpen}>
                        {t("order6")}
                    </button>
                </ul>
                <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="modal--add">
                            <CloseIcon onClick={clickClose} />
                            <p>
                                <span>
                                    {t("order7")}
                                </span>
                                <input type="text" value={name} onChange={clicknameChange} />
                            </p>
                            <p>
                                <span>
                                    {t("order8")}
                                </span>
                                <input type="text" value={address} onChange={clickaddressChange} disabled={!name} />
                            </p>
                            <p>
                                <span>
                                    {t("order9")}
                                </span>
                                <input type="tel" value={contact} onChange={clickcontactChange} disabled={!address} />
                            </p>
                            <br />
                            <button className='btn--order' onClick={writeToDatabase, () => { postTest(); }} disabled={!contact}>
                                {t("order9")}
                            </button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div >
    )
}



export default Cartadd