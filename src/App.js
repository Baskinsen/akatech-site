import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Teams from './components/Teams'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger' 


function App() {
    gsap.registerPlugin(ScrollTrigger)
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/Services" element={<Services/>} />
                    <Route exact path="/About" element={<About/>} />
                    <Route exact path="/Teams" element={<Teams />} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App; 