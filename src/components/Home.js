import '../styles/home.css'
import { Link } from 'react-router-dom'
import hero from '../images/home/pexels-zukiman-mohamad-87236 1.png'
import offerImg from '../images/home/pexels-aart-prikker-15085029 1.png'
import integratedIcon from '../images/home/Integrated icon.png'
import drillingWaste from '../images/home/Drilling waste.png'
import businessConsulting from '../images/home/Business consulting.png'
import projectManagement from '../images/home/project management.png'
import contactImg from '../images/home/pexels-janrune-smenes-reite-3197704 2.png'
import halliburton from '../images/home/Halliburton svg.png'
import bakerHuges from '../images/home/Baker Hughes svg.png'
import { useRef, useLayoutEffect } from 'react'
import { gsap, } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
const Home = () => {
    const homeRef = useRef()
    const heading1 = useRef()
    const heading2 = useRef()
    const years = useRef()
    const jobs = useRef()
    const client = useRef()
    const carousel = useRef()
    // const [stats1, setStat1] = useState({ value: 0 })
    // const [stats2, setStats2] = useState({ value: 0 })
    // const [stats3, setStats3] = useState({ value: 0 })
    // const heroText = SplitType('.hero')
    useLayoutEffect(() => {
        const inforight = document.querySelectorAll('.inforight')
        const infoleft = document.querySelectorAll('.infoleft')
        const statsInfo = document.querySelectorAll('.stats-info')
            let ctx = gsap.context(() => {
            const tx = gsap.timeline()
            const headings = [heading1.current, heading2.current]
            gsap.registerPlugin(ScrollTrigger)
            tx.from(homeRef.current, {opacity: 0.5,scale: 0.99})
            tx.to(homeRef.current, {opacity: 1,duration: 1.5,scale: 1})
            tx.from('.hero-1', { x: -100, opacity:0},"<+=50%")
            tx.to('.hero-1', { x: 0, opacity:1},"<+=50%")
            tx.from('.hero-2', { x: -100, opacity: 0},"<+=50%")
            tx.to('.hero-2', {x: 0, opacity:1},"<+=50%")
            tx.from('.hero-link', {x: -100,opacity:0},"<+=50%")
            tx.to('.hero-link', { x: 0, opacity:1}, "<+=50%")
            headings.forEach((head) => {
                gsap.from(head, { x: -100, opacity: 0})
                gsap.to(head, { scrollTrigger: { trigger:head, toggleActions: "restart none none none" }, x: 0, opacity: 1, duration: .5})   
            })
            inforight.forEach((info) => {
                gsap.from(info, { x: 100,y: 20,opacity: 0 })
                gsap.to(info, {scrollTrigger: { trigger:info, toggleActions: "restart none none none" }, x:0, y:0, opacity: 1, duration:.5}) 
            })
                infoleft.forEach(info => {
                    gsap.set(info, {opacity: 0})
                    gsap.from(info, { x: -100, y: -20, opacity: 0 })
                    gsap.to(info, {scrollTrigger: { trigger:info, toggleActions: "restart none none none" }, x:0, y:0, opacity: 1, duration:.5, delay:.5}) 
                })
                statsInfo.forEach(info => {
                    gsap.set(info, {opacity: 0})
                    gsap.from(info, { y: 20, opacity: 0 })
                    gsap.to(info, {scrollTrigger: { trigger:info, toggleActions: "restart none none none" }, y:0, opacity: 1, duration:1},"<+=100%") 
                })
                gsap.to(years.current, {scrollTrigger: {trigger: years.current}, duration:1,textContent: "+=35+",roundProps: "textContent"})
                gsap.to(client.current, {scrollTrigger: {trigger: client.current},duration:1,textContent: "+=54",roundProps: "textContent"})
                gsap.to(jobs.current, {scrollTrigger:{trigger: jobs.current},duration:1,textContent: "+=54",roundProps: "textContent",ease: "none"})
                gsap.to(carousel.current, {x: Infinity, duration: Infinity})
            
        })
        return ()=> ctx.revert()
    },[])
    return ( 
        <div>
            <div className='hero' ref={homeRef}>
                <img src={hero} alt="hero-img"  />
                <h1 className='hero-1'>Akatech Energy</h1>
                <p className='hero-2'>Lorem ipsum dolor sit amet consectetur. Arcu blandit sed adipiscing non fermentum libero euismod nunc. Enim ut turpis sed et viverra faucibus pellentesque sit varius. Elementum amet eget dolor nisl.</p>
                <Link to="/Services" className='hero-link'> Explore  Services <span className='arrow1'>&rarr;</span></Link>
            </div>
            <div className='info'>
                <h1  ref={heading1}>Who We Are</h1>
                <div>
                    <p className='infoleft'>Akatech energy is a cutting-edge provider of comprehensive solutions for the energy industry. We are a team of seasoned professionals who are passionate about delivering the highest-quality services to our clients.<br/>
At Akatech Energy, we are committed to driving success and delivering value to our customers. We provide a range of services that help oil and gas companies optimize their operations, including exploration, drilling, production, and more. Our team has a wealth of experience in the industry and is dedicated to ensuring our clients achieve their goals.<br/>
We take pride in our commitment to safety and environmental responsibility. We strive to minimize our impact on the environment while maximizing the value we deliver to our clients. Our team adheres to the highest standards of safety and quality to ensure our operations are conducted with the utmost care and professionalism.<br/>
Our mission is to be the go-to provider of innovative and reliable oil and gas services. We are dedicated to exceeding our clients' expectations and building lasting relationships based on trust and integrity. At Akatech Energy, we are committed to delivering results that drive success and help our clients achieve their goals.</p>
                    <img src={hero} alt="hero-background" className='inforight' />

                </div>
            </div>
            <div className='offers'>
                <h1 ref={heading2}>What We Offer</h1>
                <div className='offers-container'>
                    <img src={offerImg} alt=""  className='infoleft'/>
                    <div >
                        <div className='inforight'><img src={integratedIcon} alt="" /><span>Integrated Fluids & Filtration Management</span></div>
                        <div className='inforight'><img src={drillingWaste} alt="" /><span>Solids Control and Drilling Waste Management</span></div>
                        <div className='inforight'><img src={businessConsulting} alt="" /><span>Business Consulting & Advisory Services</span></div>
                        <div className='inforight'><img src={projectManagement} alt="" /><span>Project Management</span></div>
                        <Link to="/Services" className='inforight'> View All Serivces</Link>
                    </div>
                </div>
            </div>
            <div className='stats'>
                <div className='stats-info'>
                    <h1 ref={years}>0+</h1>
                    <h2>Years of<br/> experience</h2>
                </div>
                <div className='stats-info'>
                    <h1 ref={jobs}>0</h1>
                    <h2>Jobs<br/> Completed</h2>
                </div>
                <div className='stats-info'>
                    <h1 ref={client}>0</h1>
                    <h2>Client<br/> Feedback</h2>
                </div>
            </div>
            <div className='contact'>
                <img src={contactImg} alt="contact" />
                <h1>Need the Best Service Delivery<br/> on your next project?</h1>
                <Link to="#"> Talk To Us <span className='arrow2'>&#8599;</span></Link>
            </div>
            <div className='partners'>
                <h1>Here are some of technical partners that we work with</h1>
                <div ref={carousel}>
                    <img src={halliburton} alt="" />
                    <img src={bakerHuges} alt="" />
                    <img src={halliburton} alt="" />
                    <img src={bakerHuges} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Home;