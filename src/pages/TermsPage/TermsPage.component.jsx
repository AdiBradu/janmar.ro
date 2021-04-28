import React from 'react'
import './TermsPage.component.scss'
import { motion } from "framer-motion"
import terms from '../../data/terms.txt'
import cookies from '../../data/cookies.txt'
import TextFileReader from '../../components/TextFileReader/TextFileReader.component'
import {ReactComponent as Up} from '../../assets//up.svg'
import { useViewportScroll, useTransform } from "framer-motion"

export default function TermsPage(props) {

    const { scrollYProgress } = useViewportScroll()
    const opac = useTransform(scrollYProgress, [0, 0.1, 0.15, 1], [0, 0, 1, 1])

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

    return (
        <motion.div className="terms-page" exit={{opacity:0}}>
            <div className="container">
                <h3 id="terms">Termeni si conditii</h3>
                <TextFileReader txt={terms}/>
                <h3 id="cookies">Politica de cookies</h3>
                <TextFileReader txt={cookies}/>
            </div>
            <motion.div className="scrollTop" style={{ opacity: opac }} onClick={topFunction} whileHover={{opacity: 0.8}}>
                <Up/>
            </motion.div>
        </motion.div>
    )
}
