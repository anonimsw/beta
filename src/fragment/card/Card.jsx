import React, { useEffect } from 'react'
import '../card/Card.scss'
import { useCart } from 'react-use-cart';
import { t } from 'i18next';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context';

const Card = () => {
    const { addItem, getItem, removeItem } = useCart();
    const { getApi, data } = React.useContext(Context);
    useEffect(() => {
        getApi()
    }, [])

    return (
        <div className='card--items--all' id='scroll1'>
            {data?.map((el) => {
                return (
                    <div className="card--item" key={el._id}>
                        <img src={el.image} alt="" />
                        <NavLink to={`/products-title/${el.title}`} className='link--pages'>
                            {t("order1")}
                        </NavLink>
                        <div className="card--item--text">
                            <p className='title'>
                                {el.title}
                            </p>
                            <ul>
                                <p className='price'>
                                    {el.price} UZS
                                </p>
                                {!getItem(el._id)
                                    ?
                                    (
                                        <>
                                            <button onClick={() => addItem({
                                                ...el, id: el._id, count: el.count, price: el.price, image: el.image
                                            })}>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="26"
                                                    viewBox="0 0 24 26"
                                                    fill="none">
                                                    <path
                                                        d="M7.69666 11.6667V5C7.69666 3.93913 8.14997 2.92172 8.95687 2.17157C9.76377 1.42143 10.8582 1 11.9993 1C13.1404 1 14.2348 1.42143 15.0417 2.17157C15.8486 2.92172 16.3019 3.93913 16.3019 5V11.6667M3.86876 7.66667H20.1312C20.5448 7.66662 20.9535 7.74972 21.3293 7.91027C21.7051 8.07081 22.0391 8.30501 22.3084 8.5968C22.5778 8.8886 22.776 9.23108 22.8896 9.60078C23.0033 9.97048 23.0295 10.3586 22.9667 10.7387L21.1667 21.608C21.0105 22.5526 20.4956 23.414 19.7153 24.0362C18.935 24.6584 17.9409 25.0003 16.9129 25H7.08569C6.05793 25 5.06414 24.6579 4.28415 24.0357C3.50415 23.4136 2.98948 22.5524 2.83326 21.608L1.03333 10.7387C0.970466 10.3586 0.996741 9.97048 1.11035 9.60078C1.22397 9.23108 1.42223 8.8886 1.69155 8.5968C1.96087 8.30501 2.29488 8.07081 2.67068 7.91027C3.04648 7.74972 3.45518 7.66662 3.86876 7.66667Z"
                                                        stroke="#211D19"
                                                        strokeWidth="1.7"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                    </path>
                                                </svg>

                                            </button>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <button onClick={() => removeItem(el._id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="26"
                                                    viewBox="0 0 24 26"
                                                    fill="none">
                                                    <path
                                                        d="M7.69666 11.6667V5C7.69666 3.93913 8.14997 2.92172 8.95687 2.17157C9.76377 1.42143 10.8582 1 11.9993 1C13.1404 1 14.2348 1.42143 15.0417 2.17157C15.8486 2.92172 16.3019 3.93913 16.3019 5V11.6667M3.86876 7.66667H20.1312C20.5448 7.66662 20.9535 7.74972 21.3293 7.91027C21.7051 8.07081 22.0391 8.30501 22.3084 8.5968C22.5778 8.8886 22.776 9.23108 22.8896 9.60078C23.0033 9.97048 23.0295 10.3586 22.9667 10.7387L21.1667 21.608C21.0105 22.5526 20.4956 23.414 19.7153 24.0362C18.935 24.6584 17.9409 25.0003 16.9129 25H7.08569C6.05793 25 5.06414 24.6579 4.28415 24.0357C3.50415 23.4136 2.98948 22.5524 2.83326 21.608L1.03333 10.7387C0.970466 10.3586 0.996741 9.97048 1.11035 9.60078C1.22397 9.23108 1.42223 8.8886 1.69155 8.5968C1.96087 8.30501 2.29488 8.07081 2.67068 7.91027C3.04648 7.74972 3.45518 7.66662 3.86876 7.66667Z"
                                                        stroke="#FF6915"
                                                        strokeWidth="1.7"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                    </path>
                                                    <path
                                                        d="M9 18L11 20L16 15"
                                                        stroke="#FF6915"
                                                        strokeWidth="1.7"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                            </button>
                                        </>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card