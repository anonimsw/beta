import React from 'react'
import Nav from '../components/nav/Nav'
import Card from '../fragment/card/Card'
import Info from '../fragment/info/Info'
import Instruction from '../fragment/instruction/Instruction'
import '../components/hedaer/Hedear.scss'
import Footer from '../components/footer/Footer'


const Home = () => {
    return (
        <>
            <Nav />
            <header>
                <div className="container header--container">
                    <Card />
                    <Info />
                    <Instruction />
                </div>
            </header>
            <Footer />
        </>
    )
}

export default Home