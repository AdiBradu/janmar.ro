import React, { useState } from "react";
import './ContactForm.component.scss'
import axios from 'axios'

const ContactForm = () => {
  const [sent, setSent] = useState(false)
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ message, setMessage ] = useState("")
  const [ status, setStatus ] = useState("Trimite")


  const handleSend = async() => {
    setSent(true)
    setStatus("Mesajul a fost trimis")
    try {
        const response = await axios.post('/contact', {
            name, email, message 
        })
        console.log("Request back", response)
    } catch (error) {
        console.error(error.code);
        console.error(error.message);
        console.error(error.stack);
    }
  }

  return (
    <form className="form">
      <div>
        <label htmlFor="name">Nume</label>
        <input type="text" id="name" required onChange={(event) => setName(event.target.value)}/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required onChange={(event) => setEmail(event.target.value)}/>
      </div>
      <div className="message">
        <label htmlFor="message">Mesaj</label>
        <textarea id="message" required onChange={(event) => setMessage(event.target.value)}/>
      </div>
      <button 
      type="submit" 
      onClick={ (event) => {
        event.preventDefault()
        handleSend()
      }}>
          {status}
      </button>
    </form>
  );
};

export default ContactForm;