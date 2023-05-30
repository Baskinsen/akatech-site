import '../styles/about.css'
import aboutImg from '../images/about/pexels-janrune-smenes-reite-3197704 1.png'
import group from '../images/about/kenny-eliason-FoiZoPtxSyA-unsplash 1.png'
import visionImg from '../images/about/pexels-pixabay-235615 1.png'
import ourValuesImg from '../images/about/jeremy-bishop-vGjGvtSfys4-unsplash 1 (1).png'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    const aboutRef = useRef()
    const aboutheading = useRef()
    const heading1 = useRef()
    useLayoutEffect(() => {
        const inforight = document.querySelectorAll('.inforight')
        const infoleft = document.querySelectorAll('.infoleft')
        const statsInfo = document.querySelectorAll('.stats-info')
            let ctx = gsap.context(() => {
            const tx = gsap.timeline()
            gsap.registerPlugin(ScrollTrigger)
            tx.from(aboutRef.current, {opacity: 0.5,scale: 0.99})
            tx.to(aboutRef.current, {opacity: 1,duration: 1.5,scale: 1})
            tx.from('.about-1', { x: -100, opacity:0},"<+=50%")
            tx.to('.about-1', { x: 0, opacity:1},"<+=50%")
            tx.from('.about-2', { x: -100, opacity: 0},"<+=50%")
            tx.to('.about-2', {x: 0, opacity:1},"<+=50%")
            gsap.from(aboutheading.current, { x: -100, opacity: 0})
            gsap.to(aboutheading.current, { scrollTrigger: { trigger:aboutheading.current, toggleActions: "restart none none none" }, x: 0, opacity: 1, duration: .5})   
                gsap.from(heading1.current, { x: -100, opacity: 0})
                gsap.to(heading1.current, { scrollTrigger: { trigger:heading1.current, toggleActions: "restart none none none" }, x: 0, opacity: 1, duration: .5})   
            inforight.forEach((info) => {
                gsap.from(info, { x: 100,y: 20,opacity: 0 })
                gsap.to(info, {scrollTrigger: { trigger:info }, x:0, y:0, opacity: 1, duration:.5}) 
            })
                infoleft.forEach(info => {
                    gsap.set(info, {opacity: 0})
                    gsap.from(info, { x: -100, y: -20, opacity: 0 })
                    gsap.to(info, {scrollTrigger: { trigger:info}, x:0, y:0, opacity: 1, duration:.5, delay:.5}) 
                })
                statsInfo.forEach(info => {
                    gsap.set(info, {opacity: 0})
                    gsap.from(info, { y: 20, opacity: 0 })
                    gsap.to(info, {scrollTrigger: { trigger:info}, y:0, opacity: 1, duration:1},"<+=100%") 
                })
            
        })
        return ()=> ctx.revert()
    },[])
    return ( 
        <div>
            <div className='about-hero' ref={aboutRef}>
                <img src={aboutImg} alt="" />
                <h1 className='about-1'>ABOUT US</h1>
                <p className='about-2'>Partnering with you for sustainable energy solutions</p>
            </div>
            <main className='about-main'>
                <p>At <span>AKATECH ENERGY LIMITED,</span> we are a customer-focused energy services provider with a special focus on Integrated Fluids & Filtration Management, Solids Control, Drilling Waste Management, Project Management, Business Consulting, and Advisory Services. Our mission is to provide innovative and integrated solutions that deliver maximum value to our clients.<br/>
Our unique selling proposition lies in our ability to provide customized and integrated solutions that deliver value to our clients. With our extensive experience and expertise in the industry, we are well-equipped to handle complex projects and deliver results that exceed our clients' expectations.<br/>
                    Our teams are comprised of experienced professionals who bring a wealth of knowledge and expertise to every project. We understand the importance of collaboration and effective communication, which is why we work closely with our clients to ensure their needs and objectives are met. With a team of experienced and competent professionals, we have built a reputation for delivering high-quality services and solutions that meet our clients' needs. We understand the challenges facing the oil and gas industry, and we are committed to providing our clients with tailored solutions that address their specific needs.</p>
                <Link to="/Teams">View Our Team <span >&#8599;</span></Link>
                <ul className='mission-vision'>
                    <li className='infoleft'>
                        <img src={group} className='about-img' alt="" />
                    </li>
                    <li className='inforight'>
                        <h1>Our Mission</h1>
                        <p>Mission statement:Our mission is to responsibly explore, develop, and produce energy resources while prioritizing the safety and well-being of our employees, contractors, and communities. We believe that by working together, we can make a positive impact on the world. We aim to be a reliable supplier of energy products and services that enhance people's lives, while also protecting our environment for future generations. We are committed to fostering a culture of inclusion, diversity, and respect, and to giving back to the communities where we operate. Our ultimate goal is to create a better future for everyone, and we are dedicated to achieving this through sustainable practices and innovative solutions to business.</p>
                    </li>
                    <li className='infoleft' id='item1'>
                        <h1>Our Vision</h1>
                        <p>Our vision is to create a better energy future for all. As a leading energy company, we are committed to creating sustainable solutions that benefit our communities, protect our planet, and enhance the lives of our employees and customers. We strive to be an industry leader in innovation, customer service, and responsible practices, while also contributing to the greater good of society.</p>
                    </li>
                    <li className='inforight'>
                        <img src={visionImg} className='about-img' alt="" />
                    </li>
                    <li className='infoleft'>
                        <img src={ourValuesImg} className='about-img' alt="" />
                    </li>
                    <li className='inforight'>
                        <h1>Our Values</h1>
                        <ul className='values'>
                            <li>
                                <h3>1. Competency</h3> 
                                <p>We believe that competency is crucial to providing the best energy services to our clients. At AKATECH ENERGY LIMITED, we invest in our employees' training and development to ensure that they have the necessary skills and knowledge to handle all types of  projects. Our team comprises experienced professionals who bring diverse expertise to every project, allowing us to provide innovative and effective solutions to our clients' needs.</p>
                            </li>
                            <li>
                                <h3>2. Integrity</h3>
                                <p>At AKATECH ENERGY LIMITED, we value integrity above all else. We conduct our business with honesty, transparency, and ethical standards, ensuring that our clients can trust us to deliver on our promises. We believe that integrity is the foundation of long-term relationships, and we strive to build lasting partnerships with our clients based on mutual trust and respect.</p>
                            </li>
                            <li>
                                <h3>3. Professionalism</h3>
                                <p>As energy and oil & gas service providers, we understand the importance of professionalism in all our dealings. Our team of experts is committed to delivering the highest quality services while maintaining a high level of professionalism. From our communication with clients to the execution of projects, we ensure that every aspect of our work reflects our commitment to professionalism. Our goal is to exceed our clients' expectations by providing exceptional services that meet their unique needs.</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </main>
        </div>
     );
}
 
export default About;