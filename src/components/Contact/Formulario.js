import '../../assets/css/styles.scss'
import {Form}  from 'react-bootstrap'
import { useState } from 'react'

export default function Formulario() {
    
    const [formData,setFormData] = useState({
        name:""
    })

    const probando = (event) => {
       
         const name = event.target.value
         console.log(name); 
       // setFormData({...formData, name})
     }
     
     const handleChangeName = (event) => {
        const name = event.target.value
        setFormData({...formData, name})
     } 
     console.log(formData)
     
    return (
    <div id="contact" className="contact">
      <div className="contact__bgsecondary">
      </div>
      <div className="contact__image">
      </div>
      <div> 
        <h2>Get in touch <br/><b>We are hiring!</b></h2>
      </div>
      <div className="datos__contacto">
        <Form>
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Name" onChange={handleChangeName}/>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter Number Phone" />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form> 
      </div> 
      <button className="contact__button" onClick={probando} >Send</button>
    </div>

    )
}