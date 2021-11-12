import '../../assets/css/styles.scss'
import {Form}  from 'react-bootstrap'

export default({onChangeName, onChangeEmail, onChangePhone, onChangeMessage, onClick}) => {

  
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
          <Form.Control type="text" placeholder="Name" onChange={onChangeName}/>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={onChangeEmail} />
          </Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter Number Phone" onChange={onChangePhone} />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={onChangeMessage} />
          </Form.Group>
        </Form> 
      </div> 
      <button className="contact__button" onClick={onClick} >Send</button>
    </div>

    )
}