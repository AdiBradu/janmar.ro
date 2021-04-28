import React from 'react'
import './button.component.scss'
import { motion } from "framer-motion"

const item = {
    initial: { opacity: 0, y: 100 },
    actual: { opacity: 1, y: 0 }
}

export default function Button() {

    return (
        <motion.div className="button-primary" variants={item}>
            <h4>produse</h4>
        </motion.div>
    )
}