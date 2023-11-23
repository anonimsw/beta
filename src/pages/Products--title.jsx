import React from 'react'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import ProductsInfo from '../fragment/products--info/Products--info'

const Products = () => {



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

export default Products