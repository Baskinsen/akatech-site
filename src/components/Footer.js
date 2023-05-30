import { Link } from 'react-router-dom'
import footerlogo from '../images/footer/footerlogo.png'
import Email from '../images/footer/Email.png'
import Instagram from '../images/footer/Instagram.png'
import LinkedIn from '../images/footer/LinkedIn.png'
import twitter from '../images/footer/twitter.png'
import localPhone from '../images/footer/Local phone.png'
import locationOn from '../images/footer/Location on.png'
import copyright from '../images/footer/Copyright.png'


const Footer = () => {
    return ( 
        <div className="footer">
            <div className='footerlinks'>
                <div>
                    <img src={footerlogo} alt="logo" />
                    <p>Partnering with you for sustainable energy solutions</p>
                </div>
                <div>
                    <h1>Quick Links</h1>
                    <ul>
                        <li><Link to='/About'>About Us</Link></li>
                        <li><Link to='/Contact'>Contact Us</Link></li>
                        <li><Link to='/Services'>Services</Link></li>
                    </ul>
                </div>
                <div>
                    <h1>Services</h1>
                    <ul className='contacts'>
                        <li><img src={Email} alt="email" /><span>info@akatechenergyservices.com</span></li>
                        <li><img src={localPhone} alt="phone" /><span>+234 704 745 9400</span></li>
                        <li><img src={locationOn} alt="location" /><span>36b, Jay Jay Oladimeji Street, Off Freedom way, Ikate, Lekki, Lagos state</span></li>
                    </ul>
                </div>
            </div>
            <div className='copyright'>
                <div>
                    <img src={copyright} alt="copyright" />
                    <p>2023 Akatech Energy Ltd. All rights reserved.</p>
                </div>
                <ul>
                    <li><img src={Instagram} alt="instagram" /></li>
                    <li><img src={twitter} alt="twitter" /></li>
                    <li><img src={LinkedIn} alt="linkedin" /></li>
                </ul>
            </div>
        </div>
     );
}

 
export default Footer;