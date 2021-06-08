import React, {useState} from 'react'
import './newsform.component.scss'
import { ReactComponent as Send } from './send.svg';
import axios from 'axios'

export default function Newsform(props) {

    const [ email, setEmail ] = useState("")
    const [ status, setStatus ] = useState("")

    const handleSend = async() => {
        setStatus('Multumim pentru abonare!')
        try {
            const response = await axios.post('/newsletter', {
                email
            })
            console.log("Request back", response)
        } catch (error) {
            console.error(error.code);
            console.error(error.message);
            console.error(error.stack);
        }
    }

    return (
        <div className="news-form">
            <div className="news-form-body">
                <input placeholder="email" onChange={(event) => setEmail(event.target.value)}></input>
                <button 
                type="submit" 
                className="send-btn"
                onClick={(event) => {
                    event.preventDefault()
                    handleSend()
                }
                }
                >
                    <Send />
                </button>
            </div>
            <div>{status}</div>
        </div>
    )
}
