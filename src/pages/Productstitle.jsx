import React from 'react'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import ProductsInfo from '../fragment/productsinfo/Productsinfo'

const Productstitle = () => {



    return (
        <>
            <Nav />
            <header>
                <div className="container header--container">
                    <ProductsInfo />
                </div>
            </header>
            <Footer />
        </>
    )
}

export default Productstitle
