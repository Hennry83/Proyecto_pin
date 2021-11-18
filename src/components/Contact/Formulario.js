import { useState } from 'react';
import axios from 'axios';
import { Form, FloatingLabel } from 'react-bootstrap';
import '../../assets/css/styles.scss';
import TxtForm from './TxtForm'
import { Alert} from "react-bootstrap";


export default () => {
  
  const [estadoEnvio, setEstadoEnvio] = useState(0);
  const [banderaForm, setBanderaForm] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [validMessage, setValidMessage] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChangeName = (event) => {
    const name = event.target.value

    const regexName = RegExp(/^[a-zA-Z ]+$/);
    const resName = regexName.test(name);

    resName && name.length > 0 && name.length < 50
      ? setValidName(true)
      : setValidName(false);

    setFormData({ ...formData, name })
  }

  const handleChangeEmail = (event) => {
    const email = event.target.value

    const regexEmail = RegExp(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    );
    const resEmail = regexEmail.test(email);
    resEmail ? setValidEmail(true) : setValidEmail(false);

    setFormData({ ...formData, email })
  }

  const handleChangePhone = (event) => {
    const phone = event.target.value

    const regexPhone = RegExp(/^[0-9]+$/);
    const resPhone = regexPhone.test(phone);

    resPhone && phone.length > 6 && phone.length < 21
      ? setValidPhone(true)
      : setValidPhone(false);

    setFormData({ ...formData, phone })
  }

  const handleChangeMessage = (event) => {
    const message = event.target.value

    const regexMessage = RegExp(/^[a-zA-Z0-9 ]+([a-z0-9!#$%&'*+/=?^_`{|}~-]+)$/);
    const resMessage = regexMessage.test(message);

    resMessage ? setValidMessage(true) : setValidMessage(false);

    setFormData({ ...formData, message })
  }

  const formToggle = () => {
    setBanderaForm(false);
  };

  const handleSubmit = () => {
    if (validName && validEmail && validPhone && validMessage) {

      setBanderaForm(true);

      const sendData = async () => {
        try {
          const response = await axios.post(
            "https://back-25watts.herokuapp.com/public/api/altausuario",
            formData
          );
          setEstadoEnvio(response.status);
        } catch (err) {
          setEstadoEnvio(err.message.split(" ")[5]); 
        }
      };

      sendData();
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setValidName(false);
      setValidEmail(false);
      setValidPhone(false);
      setValidMessage(false);
    }
  };
    //"http://127.0.0.1:8000/api/altausuario",
  return (
    <div>
      {!banderaForm ?
        <div id="contact" className="contact">
          <div className="contact__bgsecondary">
          </div>
          <div className="contact__image">
          </div>
          <div>
            <h2>Get in touch <br /><b>We are hiring!</b></h2>
          </div>
          <div className="datos__contacto">
            <FloatingLabel
              controlId="floating-inp"
              label="Name"
              className="tt mb-4 alturaTxt"
            >
              <Form.Control
                type="text"
                placeholder="###"
                name="name"
                onChange={handleChangeName}
                className={validName ? "txt-ok" : "txt-nook"}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floating-inp"
              label="Email"
              className="mb-4 alturaTxt"
            >
              <Form.Control
                type="email"
                placeholder="###"
                name="email"
                onChange={handleChangeEmail}
                className={validEmail ? "txt-ok" : "txt-nook"}

              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floating-inp"
              label="Phone"
              className="mb-4 alturaTxt"
            >
              <Form.Control
                type="phone"
                placeholder="###"
                name="phone"
                onChange={handleChangePhone}
                className={validPhone ? "txt-ok" : "txt-nook"}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floating-inp"
              label="Message"
              className="mb-4 alturaTxt"
            >
              <Form.Control
                as="textarea"
                placeholder="###"
                style={{ height: "10rem", paddingTop: "2rem" }}
                name="message"
                onChange={handleChangeMessage}
                className={validMessage ? "txt-ok" : "txt-nook"}
              />
            </FloatingLabel>
            <button className="contact__button" onClick={handleSubmit}>Send</button>
          </div>
        </div>
        : <div id="contact" className="contact">
          <div className="contact__bgsecondary">
          </div>
          <div className="contact__image">
          </div>
          <div>
            <h2>Get in touch <br /><b>We are hiring!</b></h2>
          </div>
          <div className="datos__contacto">
            {/*         <FloatingLabel
          controlId="floating-inp"
          label="Name"
          className="tt mb-4 alturaTxt"
        >
          <Form.Control
            type="text"
            placeholder="###"
            name="name"
            onChange={handleChangeName}
            className={validName ? "txt-ok" : "txt-nook"}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floating-inp"
          label="Email"
          className="mb-4 alturaTxt"
        >
          <Form.Control
            type="email"
            placeholder="###"
            name="email"
            onChange={handleChangeEmail}
            className={validEmail ? "txt-ok" : "txt-nook"}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floating-inp"
          label="Phone"
          className="mb-4 alturaTxt"
        >
          <Form.Control
            type="phone"
            placeholder="###"
            name="phone"
            onChange={handleChangePhone}
            className={validPhone ? "txt-ok" : "txt-nook"}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floating-inp"
          label="Message"
          className="mb-4 alturaTxt"
        >
          <Form.Control
            as="textarea"
            placeholder="###"
            style={{ height: "10rem", paddingTop: "2rem" }}
            name="message"
            onChange={handleChangeMessage}
            className={validMessage ? "txt-ok" : "txt-nook"}
          />
        </FloatingLabel> */}
            <TxtForm onClick={formToggle} status={estadoEnvio} />
            {/* <button className="contact__button" onClick={handleSubmit} >Send</button> */}
          </div>
        </div>
      }
    </div>
  )
}
