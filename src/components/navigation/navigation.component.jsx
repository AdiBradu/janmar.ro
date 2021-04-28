import React, { useState } from 'react'
import './navigation.component.scss'
import { motion } from "framer-motion"
import Logo from '../../components/logo/logo.component'
import Menu from '../../components/Menu/Menu.component'
import { Link, useHistory } from 'react-router-dom'

export default function Navigation() {

    const history = useHistory()
    const navigateTo = () => history.push('/')

    const [showMenu, setShowMenu] = useState(false)

    const menuVariants = {
        hidden: {
            top: '-100vh'
        },
        visible: {
            top: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    const navVariants = {
        initial: {
            fill: 'rgba(0,49,73,1)'
        },
        visible:{
            fill: 'rgba(252,191,73,1)',
            transition:{
                duration: 1.2
            }
        }
    }

    let menu

    if(showMenu){
        menu =  
        <motion.div 
        className="collapse-area" 
        onClick={() => setShowMenu(false)}
        initial={"hidden"}
        animate={ showMenu ? "visible" : "hidden"}
        variants={menuVariants}
        >
            <Menu/>
        </motion.div>
    }

    return (
        <nav>
            <div className="navigation">
                <Link 
                to="/" 
                onClick={() => {
                    navigateTo()
                    window.location.reload(false)
                }}
                >
                    <Logo showMenu={showMenu}/>
                </Link>
                <button onClick={() => setShowMenu(!showMenu)} >
                    <motion.svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                        initial={"hidden"}
                        animate={ showMenu ? "visible" : "initial"}
                        variants={navVariants}
                    >
                        <motion.path id="path01" d="M31 0.470825H0.294922V6.15695H31V0.470825Z"/>
                        <motion.path id="path02" d="M31 12.1569H0.294922V17.843H31V12.1569Z"/>
                        <motion.path id="path03" d="M31 23.843H0.294922V29.5291H31V23.843Z"/>
                    </motion.svg>
                </button>
            </div>
            {menu}
        </nav>
    )
}
