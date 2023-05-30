import '../styles/teams.css'
import teamHero from '../images/team/pexels-matheus-natan-2976970 2.png'
import seye from '../images/team/Avi.png'
import Avi2 from '../images/team/Avi2.png'
import Avi3 from '../images/team/Avi3.png'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef, useLayoutEffect } from 'react'

const Teams = () => {
    const serviceRef = useRef(), serviceHeading = useRef()
    return ( 
        <div>
             <div className='teamHero' ref={serviceRef}>
                <img src={teamHero} alt="hero-img"  />
                <h1 className='teamHero-1'>Our Team</h1>
                <p className='teamHero-2'>A committed workforce, with integrity as our watchword</p>
            </div>
            <main className='teams-main'>
               <p ref={serviceHeading}>Our teams are comprised of experienced professionals who bring a wealth of knowledge and expertise to every project. We understand the importance of collaboration and effective communication, which is why we work closely with our clients to ensure their needs and objectives are met. With a team of experienced and competent professionals, we have built a reputation for delivering high-quality services and solutions that meet our clients' needs. We understand the challenges facing the oil and gas industry, and we are committed to providing our clients with tailored solutions that address their specific needs.</p>
                <div className='team-members'>
                    <div className='member-1'>
                        <img src={seye} alt="" />
                        <h1>Mr. Seye Thomas<br/><span>MD/CEO</span></h1>
                        <p>Meet our Managing Director, Mr Seye Thomas, a visionary leader with over 25 years of experience in oil and gas industry. As the driving force behind our company, Mr Seye Thomas brings an unmatched level of expertise and passion to every project. With a keen eye for innovation and a commitment to excellence, Mr Thomas leads our team in delivering top-tier solutions for our clients. Not only does Mr. Thomas have a proven track record of success, but he also prioritizes creating a positive company culture and empowering his team members. 
At the helm of our team, Mr. Thomas leads with a collaborative, results-driven approach that inspires our team members to be their best. He fosters a culture of respect, support, and empowerment that has earned our company a reputation as a top employer in the industry.
Beyond his exceptional professional credentials, Mr. Thomas is known for his integrity, authenticity, and unwavering commitment to excellence. </p>
                    </div>
                    <div className='member-2'>
                    <img src={Avi2} alt="" />
                        <h1>Mr. Seye Thomas<span><br/>Chief Operating Officer</span></h1>
                        <p>Meet our Managing Director, Mr Seye Thomas, a visionary leader with over 25 years of experience in oil and gas industry. As the driving force behind our company, Mr Seye Thomas brings an unmatched level of expertise and passion to every project. With a keen eye for innovation and a commitment to excellence, Mr Thomas leads our team in delivering top-tier solutions for our clients. Not only does Mr. Thomas have a proven track record of success, but he also prioritizes creating a positive company culture and empowering his team members. </p>
                    </div>
                    <div className='member-3'>
                    <img src={Avi3} alt="" />
                        <h1>Mrs. Ife Cole<span><br/>Senior Geoscientist</span></h1>
                        <p>Meet our Managing Director, Mr Seye Thomas, a visionary leader with over 25 years of experience in oil and gas industry. As the driving force behind our company, Mr Seye Thomas brings an unmatched level of expertise and passion to every project. With a keen eye for innovation and a commitment to excellence, Mr Thomas leads our team in delivering top-tier solutions for our clients. Not only does Mr. Thomas have a proven track record of success, but he also prioritizes creating a positive company culture and empowering his team members. </p>
                    </div>
                </div>
            </main>
        </div>
     );
}
 
export default Teams;