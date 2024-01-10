import React from 'react'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import { useCart } from 'react-use-cart';
import Cartadd from '../fragment/cartadd/Cartadd';
import Cartnote from '../fragment/cartnote/Cartnote';


const Cart = () => {
    const { isEmpty } = useCart();

    return (
        <>
            <Nav />
            <header>
                <div className="container header--container">
                    {isEmpty ? (
                        <>
                            <Cartnote />
                        </>
                    ) : (
                        <>
                            <Cartadd />
                        </>
                    )}
                </div>
            </header>
            <Footer />
        </>
    )
}

export default Cart
