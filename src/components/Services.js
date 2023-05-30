import '../styles/services.css'
import hero from '../images/services/integrated filtration system 1.png'
import integratedImg from '../images/services/pexels-janrune-smenes-reite-3207536 1.png'
import drillingImg from '../images/services/pexels-pixabay-162568 1.png'
import businessImg from '../images/services/pexels-sora-shimazaki-5668879 1.png'
import projectImg from '../images/services/cytonn-photography-vWchRczcQwM-unsplash 1.png'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef, useLayoutEffect } from 'react'
// import {Link } from 'react-router-dom'

const Services = () => {
    const serviceRef = useRef()
    const serviceheading = useRef()
    const heading1 = useRef()
    useLayoutEffect(() => {
        const inforight = document.querySelectorAll('.inforight')
        const infoleft = document.querySelectorAll('.infoleft')
        const statsInfo = document.querySelectorAll('.stats-info')
            let ctx = gsap.context(() => {
            const tx = gsap.timeline()
            gsap.registerPlugin(ScrollTrigger)
            tx.from(serviceRef.current, {opacity: 0.5,scale: 0.99})
            tx.to(serviceRef.current, {opacity: 1,duration: 1.5,scale: 1})
            tx.from('.service-1', { x: -100, opacity:0},"<+=50%")
            tx.to('.service-1', { x: 0, opacity:1},"<+=50%")
            tx.from('.service-2', { x: -100, opacity: 0},"<+=50%")
            tx.to('.service-2', {x: 0, opacity:1},"<+=50%")
            gsap.from(serviceheading.current, { x: -100, opacity: 0})
            gsap.to(serviceheading.current, { scrollTrigger: { trigger:serviceheading.current, toggleActions: "restart none none none" }, x: 0, opacity: 1, duration: .5})   
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
            <div className='services-hero' ref={serviceRef}>
                <img src={hero} alt="hero-"/>
                <h1 className='service-1'>Our Services</h1>
                <p className='service-2'>Partnering with you for sustainable energy solutions</p>
            </div>
            <main className='services-main'>
               <p ref={serviceheading}>Welcome to <span>Akatech Energy,</span>  where we provide a comprehensive range of top-quality services for the oil and gas industry. Our team of experienced professionals is committed to delivering excellence in every project we undertake, whether it's exploration and production, refining, or transportation.<br/>
We understand that the energy industry is constantly evolving, and we strive to stay at the forefront of new technologies and innovations. Our services are designed to help our clients adapt to changing market conditions, improve operational efficiency, and reduce costs.<br/>
At <span>Akatech Energy,</span> we pride ourselves on our attention to detail and our focus on safety and environmental responsibility. We work closely with our clients to develop customized solutions that meet their unique needs and help them achieve their business objectives.<br/>
Whether you're looking for exploration and production services, engineering and construction, or maintenance and operations support, we have the expertise and experience to get the job done right. Contact us today to learn more about our services and how we can help you achieve success in the oil and gas industry.<br/>
                    Below are details of some of the services we offer.</p>
                <ul>
                    <li className='infoleft'><img src={integratedImg} alt="Intergrated Management" /></li>
                    <li className='inforight'>
                        <h1>Integrated Fluids & Filtration Management</h1>
                        <p>At Akatech Energy Limited, we provide integrated fluids and filtration management services for the oil and gas industry. Our team of experts work closely with clients to ensure that they have the right fluids and filtration systems in place to keep their operations running smoothly. Our services include fluid analysis and testing, filtration system design and installation, and ongoing maintenance and support. With our state-of-the-art technology and years of experience, we help our clients reduce downtime, increase efficiency, and minimize costs.</p>
                    </li>
                    <li className='infoleft' id="item1">
                        <h1>Solids Control and Drilling Waste Management</h1>
                        <p>At Akatech Energy Limited, we provide solids control and drilling waste management services to help our clients manage the waste generated during drilling operations. Our team of experts uses the latest technology and equipment to separate and dispose of solids and other waste materials safely and efficiently. Our services include waste transportation and disposal, and environmental compliance reporting. With our comprehensive waste management solutions, we help our clients reduce their environmental impact and stay compliant with local regulations.</p>
                    </li>
                    <li className='inforight' id="item2">
                        <img src={drillingImg} alt="drilling management" />
                    </li>
                    <li className='infoleft'>
                        <img src={businessImg} alt="business management" />
                    </li>
                    <li className='inforight'>
                        <h1>Business Consulting and Advisory Services</h1>
                        <p>At Akatech Energy Limited, we offer business consulting and advisory services to help our clients make informed decisions and stay ahead of the competition. Our team of experts provides customized solutions to address a wide range of business challenges, including market research, financial analysis, strategic planning, and organizational development. We work closely with clients to identify opportunities for growth and provide the guidance and support needed to achieve their goals.</p>
                    </li>
                    <li className='infoleft' id='item3'>
                        <h1>Project Management</h1>
                        <p>Akatech Energy Limited offers top-notch project management services to clients in the oil and gas industry. Our team of experienced project managers oversees all aspects of a project, from planning to execution, ensuring that it is completed on time, within budget, and to the highest quality standards. We work closely with clients to understand their needs and tailor our services to meet their specific requirements. Our services include project planning, risk management, resource allocation, and progress tracking.</p>
                    </li>
                    <li className='inforight' id='item4'>
                        <img src={projectImg} alt="Project Management" />
                    </li>
                    <li className='infoleft'>
                        <img src={integratedImg} alt="Intergration Management" />
                    </li>
                    <li className='inforight'>
                        <h1>Integrated Fluids & Filtration Management</h1>
                        <p>At Akatech Energy Limited, we provide integrated fluids and filtration management services for the oil and gas industry. Our team of experts work closely with clients to ensure that they have the right fluids and filtration systems in place to keep their operations running smoothly. Our services include fluid analysis and testing, filtration system design and installation, and ongoing maintenance and support. With our state-of-the-art technology and years of experience, we help our clients reduce downtime, increase efficiency, and minimize costs.</p>
                    </li>
                    <li className='infoleft' id='item5'>
                        <h1>Solids Control and Drilling Waste Management</h1>
                        <p>At Akatech Energy Limited, we provide solids control and drilling waste management services to help our clients manage the waste generated during drilling operations. Our team of experts uses the latest technology and equipment to separate and dispose of solids and other waste materials safely and efficiently. Our services include waste transportation and disposal, and environmental compliance reporting. With our comprehensive waste management solutions, we help our clients reduce their environmental impact and stay compliant with local regulations.</p>
                    </li>
                    <li className='inforight' >
                        <img src={drillingImg} alt="Drilling Management" />
                    </li>
                    <li className='infoleft'>
                        <img src={businessImg} alt="Business Management" />
                    </li>
                    <li className='inforight'>
                        <h1>Business Consulting and Advisory Services</h1>
                        <p>At Akatech Energy Limited, we offer business consulting and advisory services to help our clients make informed decisions and stay ahead of the competition. Our team of experts provides customized solutions to address a wide range of business challenges, including market research, financial analysis, strategic planning, and organizational development. We work closely with clients to identify opportunities for growth and provide the guidance and support needed to achieve their goals.</p>
                    </li>
                    <li className='infoleft' id='item6'>
                        <h1>Project Management</h1>
                        <p>Akatech Energy Limited offers top-notch project management services to clients in the oil and gas industry. Our team of experienced project managers oversees all aspects of a project, from planning to execution, ensuring that it is completed on time, within budget, and to the highest quality standards. We work closely with clients to understand their needs and tailor our services to meet their specific requirements. Our services include project planning, risk management, resource allocation, and progress tracking.</p>
                    </li>
                    <li className='inforight'>
                        <img src={projectImg} alt="Project Management" />
                    </li>
                </ul>
                <div className='contact-form'>
                    <h1 ref={heading1}>Get in touch with us for more details</h1>
                    <form action="">
                        <input type="text" placeholder='Name'/>
                        <input type="text" placeholder='Subject'/>
                        <textarea name="" id="" placeholder='Message'></textarea>
                        <button>Talk To Us <span>&#8599;</span></button>
                    </form>
                </div>
            </main>
        </div>
     );
}
 
export default Services;