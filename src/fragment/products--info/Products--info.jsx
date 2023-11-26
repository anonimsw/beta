import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../products--info/Products--info.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useCart } from 'react-use-cart'
import { useTranslation } from 'react-i18next';
import { Context } from '../../context';

const ProductsInfo = () => {
    const { t } = useTranslation();
    const { title } = useParams();
    const { getApi, data } = React.useContext(Context);
    const { addItem, removeItem, getItem } = useCart();
    useEffect(() => {
        getApi()
    }, [])

    const newData = data.filter((el) => el.title === title);
    return (
        <div className='products--info'>
            {newData.map((el) => {
                return (
                    <div key={el._id}>
                        <div className="left--and--right">
                            <div className="left">
                                <img className='prodicts--img' src={el.image} alt="" />
                            </div>
                            <div className="right">
                                <p className='products--title'>
                                    {el.title}
                                </p>
                                <br />
                                <p className='sell'>
                                    <CheckCircleIcon />
                                    Есть в наличии
                                </p>
                                <br />
                                <p className='products--brend'>
                                    <span>
                                        Бренд:
                                    </span>
                                    {el.brend}
                                </p>
                                <br />
                                <ul>
                                    <p className='products--much'>
                                        <span>
                                            Цена:
                                        </span>
                                        {el.price} so'm
                                    </p>
                                    {!getItem(el._id) ? (
                                        <>
                                            <button
                                                className='add'
                                                onClick={() => addItem({ ...el, id: el._id, count: el.count, price: el.price, image: el.image })}>
                                                Купить
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="22"
                                                    viewBox="0 0 24 26"
                                                    fill="none">
                                                    <path
                                                        d="M7.69666 11.6667V5C7.69666 3.93913 8.14997 2.92172 8.95687 2.17157C9.76377 1.42143 10.8582 1 11.9993 1C13.1404 1 14.2348 1.42143 15.0417 2.17157C15.8486 2.92172 16.3019 3.93913 16.3019 5V11.6667M3.86876 7.66667H20.1312C20.5448 7.66662 20.9535 7.74972 21.3293 7.91027C21.7051 8.07081 22.0391 8.30501 22.3084 8.5968C22.5778 8.8886 22.776 9.23108 22.8896 9.60078C23.0033 9.97048 23.0295 10.3586 22.9667 10.7387L21.1667 21.608C21.0105 22.5526 20.4956 23.414 19.7153 24.0362C18.935 24.6584 17.9409 25.0003 16.9129 25H7.08569C6.05793 25 5.06414 24.6579 4.28415 24.0357C3.50415 23.4136 2.98948 22.5524 2.83326 21.608L1.03333 10.7387C0.970466 10.3586 0.996741 9.97048 1.11035 9.60078C1.22397 9.23108 1.42223 8.8886 1.69155 8.5968C1.96087 8.30501 2.29488 8.07081 2.67068 7.91027C3.04648 7.74972 3.45518 7.66662 3.86876 7.66667Z"
                                                        stroke="#fff"
                                                        strokeWidth="1.7"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                className='remove'
                                                style={{ background: "red" }}
                                                onClick={() => removeItem(el._id)}>
                                                Отмена
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="22"
                                                    viewBox="0 0 24 26"
                                                    fill="none">
                                                    <path
                                                        d="M7.69666 11.6667V5C7.69666 3.93913 8.14997 2.92172 8.95687 2.17157C9.76377 1.42143 10.8582 1 11.9993 1C13.1404 1 14.2348 1.42143 15.0417 2.17157C15.8486 2.92172 16.3019 3.93913 16.3019 5V11.6667M3.86876 7.66667H20.1312C20.5448 7.66662 20.9535 7.74972 21.3293 7.91027C21.7051 8.07081 22.0391 8.30501 22.3084 8.5968C22.5778 8.8886 22.776 9.23108 22.8896 9.60078C23.0033 9.97048 23.0295 10.3586 22.9667 10.7387L21.1667 21.608C21.0105 22.5526 20.4956 23.414 19.7153 24.0362C18.935 24.6584 17.9409 25.0003 16.9129 25H7.08569C6.05793 25 5.06414 24.6579 4.28415 24.0357C3.50415 23.4136 2.98948 22.5524 2.83326 21.608L1.03333 10.7387C0.970466 10.3586 0.996741 9.97048 1.11035 9.60078C1.22397 9.23108 1.42223 8.8886 1.69155 8.5968C1.96087 8.30501 2.29488 8.07081 2.67068 7.91027C3.04648 7.74972 3.45518 7.66662 3.86876 7.66667Z"
                                                        stroke="#fff"
                                                        strokeWidth="1.7"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                    </path>
                                                    <path
                                                        d="M9 18L11 20L16 15"
                                                        stroke="#fff"
                                                        strokeWidth="1.7"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                            </button>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                        {el._id === "64a7fd43e46294112f837662" ?
                            (
                                <ul>
                                    <li style={{ background: "#468cca", padding: "2px 5px", width: "max-content", color: "#fff" }}>
                                        {t("text1")}
                                    </li>
                                    <br />
                                    <p>
                                        {t("cad1")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("cad2")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("cad3")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("cad4")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("cad5")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("cad6")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("cad7")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("cad8")}
                                    </p>
                                    <br />
                                    <br />
                                    <li style={{ background: "#468cca", padding: "2px 5px", width: "max-content", color: "#fff" }}>
                                        {t("text2")}
                                    </li>
                                    <br />
                                    <p>
                                        {t("cad9")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("cad10")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("cad11")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("cad12")}
                                    </p>
                                    <br />
                                    <br />
                                    <li style={{ background: "#468cca", padding: "2px 5px", width: "max-content", color: "#fff" }}>
                                        {t("text3")}
                                    </li>
                                    <br />
                                    <p>
                                        {t("cad13")}
                                    </p>
                                </ul>
                            ) : (
                                <>
                                </>
                            )
                        }
                        {el._id === "64a80abdfa66b165ef3edd99" ?
                            (
                                <ul>
                                    <li style={{ background: "#b30303", padding: "2px 5px", width: "max-content", color: "#fff" }}>
                                        {t("text1")}
                                    </li>
                                    <br />
                                    <p>
                                        {t("men1")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("men2")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("men3")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("men4")}
                                    </p>
                                    <br />
                                    <br />
                                    <li style={{ background: "#b30303", padding: "2px 5px", width: "max-content", color: "#fff" }}>
                                        {t("text2")}
                                    </li>
                                    <br />
                                    <p>
                                        {t("men5")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("men6")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("cad9")}
                                    </p>
                                    <br />
                                    <p>
                                        {t("men8")}
                                    </p>
                                    <br />
                                    <br />
                                    <li style={{ background: "#b30303", padding: "2px 5px", width: "max-content", color: "#fff" }}>
                                        {t("men9")}
                                    </li>
                                    <br />
                                    <p>
                                        {t("men10")}
                                    </p>
                                </ul>
                            ) : (
                                <>
                                </>
                            )
                        }
                        {el._id === "64a80b1bfa66b165ef3edd9e" ?
                            (
                                <>
                                    <ul>
                                        <li style={{ background: "#b30303", padding: "2px 5px", width: "max-content", color: "#fff" }}>
                                            {t("text1")}
                                        </li>
                                        <br />
                                        <p>
                                            {t("woman1")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("woman2")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("woman3")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("woman4")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("woman5")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("woman6")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("woman7")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("woman8")}
                                        </p>
                                        <br />
                                        <br />
                                        <li style={{ background: "#b30303", padding: "2px 5px", width: "max-content", color: "#fff" }}>
                                            {t("text2")}
                                        </li>
                                        <br />
                                        <p>
                                            {t("woman9")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("woman10")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("woman11")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("woman12")}
                                        </p>
                                        <br />
                                        <br />
                                        <li style={{ background: "#b30303", padding: "2px 5px", width: "max-content", color: "#fff" }}>
                                            {t("text3")}
                                        </li>
                                        <br />
                                        <p>
                                            {t("cad13")}
                                        </p>
                                    </ul>
                                </>
                            ) : (
                                <>
                                </>
                            )
                        }
                        {el._id === "64a80dfbfa66b165ef3edda7" ?
                            (
                                <>
                                    <ul>
                                        <li style={{ background: "#468cca", padding: "2px 5px", width: "max-content", color: "#fff" }}>
                                            {t("text1")}
                                        </li>
                                        <br />
                                        <p>
                                            {t("cad1")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("cad2")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("cad3")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("cad5")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("cad4")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("cad6")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("cad7")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("cad8")}
                                        </p>
                                        <br />
                                        <br />
                                        <li style={{ background: "#468cca", padding: "2px 5px", width: "max-content", color: "#fff" }}>
                                            {t("text2")}
                                        </li>
                                        <br />
                                        <p>
                                            {t("total1")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("cad11")}
                                        </p>
                                        <br />
                                        <p>
                                            {t("cad11")}
                                        </p>
                                        <br />
                                        <br />
                                        <li style={{ background: "#468cca", padding: "2px 5px", width: "max-content", color: "#fff" }}>
                                            {t("text3")}
                                        </li>
                                        <br />
                                        <p>
                                            {t("total2")}
                                        </p>
                                    </ul>
                                </>
                            ) : (
                                <>
                                </>
                            )
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default ProductsInfo