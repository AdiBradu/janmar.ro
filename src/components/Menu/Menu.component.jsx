import React from 'react'
import './Menu.component.scss'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const wrapperVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
}

const linkVariants = {
    hidden: { opacity: 0, y: '20px'},
    show: { opacity: 1, y: 0 }
}

export default function Menu() {
    return (
        <motion.div className="menu" initial='hidden' animate='show' variants={wrapperVariants}>
            <Link to="/" exact>
                <motion.h3 whileHover={{color: '#f5cf84', scale:1.1}} variants={linkVariants}>Home</motion.h3>
            </Link>
            <Link to="/produse" exact>
                <motion.h3 whileHover={{color: '#f5cf84', scale:1.1}}  variants={linkVariants}>Produse</motion.h3>
            </Link>
            <Link to="/info" exact>
                <motion.h3 whileHover={{color: '#f5cf84', scale:1.1}}  variants={linkVariants}>Livrare</motion.h3>
            </Link>
            <Link to="/info" exact>
                <motion.h3 whileHover={{color: '#f5cf84', scale:1.1}}  variants={linkVariants}>Retur</motion.h3>
            </Link>
            <Link to="/info" exact>
                <motion.h3 whileHover={{color: '#f5cf84', scale:1.1}} variants={linkVariants}>Plata</motion.h3>
            </Link>
        </motion.div>
    )
}
