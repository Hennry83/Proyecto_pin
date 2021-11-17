import { Alert, Button } from "react-bootstrap";

export default ({ onClick, status}) => {  

  return (    

    <div className="message__successUnsuccess">
      {status === 0 ? 
        <Alert className="alerta_msj" variant="transparent">        
           <p className="enviando_msj">Enviando...</p>
        </Alert>
        
       : status < 200 || status > 299 ?
       <Alert
          className="alerta_msj"
          variant="danger"
          onClick={onClick}
          
        >
          <Alert.Heading>Error al enviar su solicitud</Alert.Heading>
          <p ></p>
         
          <Button variant="light" className="boton_cerrar">
            Cerrar
          </Button>
        </Alert>
        
        : 
        <Alert
          className="alerta_msj"
          variant="success"
          onClick={onClick}
          
        >
          <Alert.Heading></Alert.Heading>
          <p className="texto_exitoso">Muchas gracias. Su solictud ha sido enviada con exito!</p>
          <Button variant="light" className="boton_cerrar" >
            Cerrar
          </Button>
        </Alert>
      }
    </div>
   
  );
};