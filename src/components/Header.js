import React, {useState, useEffect} from 'react'
import Buttons from './Buttons'
import Menu from './Menu'
import {footer} from '../data/footer'
import logo from '../images/logo.svg'

const Header = () => {
    const [navLinks, setNavLinks] = useState(footer)
    const [isOpen, setIsOpen] = useState(false)
    const [width, setWidth] = useState(768)


    useEffect (() => {
        if(window.innerWidth > width) {
            setIsOpen(true)
        }

    }, [])
   
    return (
        <header className="absolute p-5 flex items-center justify-between w-full px-20">
            <div className="mr-5">
                <img src={logo} alt="blogr logo" />
            </div>

            {/* 
            Links */}
             {isOpen && ( 
                <nav className="navbar md:flex md:justify-between">
                   <ul>
                       {navLinks.map(({id, title, links}) => (
                           <li key={id}>{title}</li>
                       ))}
                   </ul>
                   <Buttons/>
               </nav>
               
             
             )}
            <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
        </header>
    )
}

export default Header
