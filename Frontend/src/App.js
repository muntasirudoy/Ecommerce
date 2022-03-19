
import './App.css';
import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer';
import All_Products from './Pages/Product_Page'
import Continue_Order from './Components/Continue_Order';
import Categories_Filter from './Components/Categories_Filter';


const App = () => {

    return (
        <>
                <BrowserRouter>
                    <Navbar />
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/All_Products" element={<All_Products />} />
                                <Route path="/Continue_Order" element={<Continue_Order />} />
                                {/* <Route path="/Categories_Filter" element={<Categories_Filter />} /> */}

                        </Routes>
                    <Footer />
                </BrowserRouter>

        </>
    );
}


export default App