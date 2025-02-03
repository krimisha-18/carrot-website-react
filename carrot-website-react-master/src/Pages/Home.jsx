import React from 'react'
import Header from '../Components/Header/Header'
import Slider from '../Components/Slider/Slider'
import Catagory from '../Components/Catagory/Catagory'
import Servies from '../Components/Servise/Servies'
import News from '../Components/News/News'
import Banner from '../Components/Benner/Banner'
import Deal from '../Components/Deal/Deal'
import Test from '../Components/Testomoneal/Test'
import Popular from '../Components/Popular/Popular'
import Product from '../Components/Product/Product'
import Footer from '../Components/Footer/Footer'


const Home = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <Catagory/>
       <Popular/>
      <Banner/>
      <Servies/>
      <Deal/>
      <Product/>
      <Test/>
      <News/>
      <Footer/>
     
    
     
      
      
    </div>
  )
}

export default Home
