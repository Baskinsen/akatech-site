import { NavLink, Link } from 'react-router-dom'
import logo from '../images/Logo.png'
import menu from '../images/menu.png'
import { gsap } from 'gsap'
import { useRef,useState } from 'react'
const Navbar = () => {
    const Menu = useRef(null)
    const links = useRef(null)
    const close  = useRef(null)
    const [open, setOpen] = useState(false)
    const toggleNav = () => {
        if (open === false) {
            Menu.current.style.display = "none"
            links.current.style.display = "flex"
            document.querySelector('.links').classList.add('newLink')
            gsap.from('.links', { x: 100 })
            gsap.to('.links', { x: 0, duration: 2 })
            close.current.style.display = "block"
            setOpen(true)
            console.log(open)
        } else if (open === true) {
            Menu.current.style.display = "block"
            document.querySelector('.links').classList.add('newLink')
            gsap.from('.links', { x: 0 })
            gsap.to('.links', { x: 100, duration: 0.1})
            links.current.style.display = "none"
            close.current.style.display = "none"
            console.log(open)
            setOpen(false)
        }

    }

    return ( 
        <nav className="navbar">
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <img src={menu} alt="open menu" onClick={toggleNav} className='menu' ref={Menu} />
            <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg" ref={close} onClick={toggleNav} className='menu' style={{display: 'none'}}><g fill="#00001A" fillRule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>
            <div className="links" ref={links}>
                <NavLink to="/" reloadDocument>Home</NavLink>
                <NavLink to="/Services" reloadDocument>Services</NavLink>
                <NavLink to="/About" reloadDocument>About Us</NavLink>
                <NavLink to="/Teams" reloadDocument>Teams</NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;