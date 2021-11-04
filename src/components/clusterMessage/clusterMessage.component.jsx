import React, {useState} from 'react'
import './clusterMessage.component.scss'
import Button from '../button/button.component'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import {ReactComponent as Crane} from '../../assets/crane.svg'
import { ReactComponent as LocationLogo } from '../../assets/location.svg';
import { ReactComponent as ModalVideo } from '../../assets/modalVideo.svg';
import Video from '../../components/ModalVideo/ModalVideo.component.jsx'

const container = {
    initial: { opacity: 0 },
    actual: { 
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3
        }
    }
}

const item = {
    initial: { opacity: 0, y: 100 },
    actual: { opacity: 1, y: 0 }
}

const triangle = {
    initial:{
        x: '50vw',
        translateX: '-50%',
        y: '50%',
        translateY: '-50%',
        rotateY: 70,
    },
    actual:{
        x: '50vw',
        translateX: '-50%',
        y: '50%',
        translateY: '-50%',
        rotateY: -20,
        transition:{
            ease: "easeIn", 
            duration: 3
        }
    }
}

export default function ClusterMessage(props) {

    const [showModal, setShowModal] = useState(false);
    const [source, setSource] = useState();

    const handleShow = (e) => {
        setShowModal(e)
    }


    return (
        <section className="section section-01">
        <div className="container">
                <motion.div className="cluster-message" style={props.style}  initial="initial" animate="actual" variants={container}>
                    <motion.h1 variants={item}>materiale de constructii, gradinarit & bricolaj</motion.h1>
                    <motion.p variants={item}>Construim impreuna din 1993.</motion.p>
                    <motion.p variants={item}>Nu ai gasit ce cautai?<br/> Preluam si comenzi speciale.</motion.p>
                    <motion.p variants={item}>Apeleaza-ne la<br/> +40 732 409 952 sau<br/> +40 722 694 544</motion.p>
                    <Link 
                    to="/produse" 
                    >
                        <Button/>
                    </Link>
                </motion.div>
                <motion.div className="pinpoints" initial="initial" animate="actual" variants={container}>
                    <div className="pinpoint-one">
                        <div className="point">
                            <motion.a variants={item} href="https://goo.gl/maps/Mk8eBUiNZNicSZtd8">
                                <LocationLogo/>
                            </motion.a>
                            <ModalVideo 
                            onClick={() => {
                                setShowModal(true);
                                setSource("https://www.youtube.com/embed/J9xV26txzPU");
                            }}
                            />
                        </div>
                        <p>Depozit Fagaras</p>
                    </div>
                    <div className="pinpoint-two">
                        <div className="point">
                        <motion.a variants={item} href="https://goo.gl/maps/QAKYNVa3eD4Ju8Hv9">
                            <LocationLogo/>
                        </motion.a>
                        <ModalVideo
                            onClick={() => {
                                setShowModal(true);
                                setSource("https://www.youtube.com/embed/EIiT68iIWGk");
                            }}
                        />
                        </div>
                        <p>Depozit Oltet</p>
                    </div>
                </motion.div>
        </div>
        <motion.div className="triangle" initial="initial" animate="actual" variants={triangle}>
            <Crane/>
        </motion.div>
        <Video
            source={source}
            showModal={showModal}
            handleShow={handleShow}
        />
        </section>
    )
}