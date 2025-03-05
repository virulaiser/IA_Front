import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal2 from "./Modal2";
import axios from "axios";


function Example() {
  const [show, setShow] = useState(false);
  const [chatResponse, setChatResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClose = () => {
    setShow(false);
    setChatResponse("");
    setError(null);
  };

  const handleShow = () => setShow(true);

  const handleSend = async (message) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/gemini`,
        { message }
      ); // Reemplaza '/api/gemini' con tu punto final de API
      setChatResponse(response.data.response);
    } catch (err) {
      setError("Error al procesar la solicitud.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Abrir Chatbot
      </Button>

      <Modal2
        show={show}
        handleClose={handleClose}
        title="Chatbot"
        onSend={handleSend}
        isLoading={isLoading}
        response={chatResponse}
        error={error}
      />
    </>
  );
}

export default Example;

/* Tu aplicación React está corriendo en http://localhost:5173.
Tu servidor Node.js/Express.js está corriendo en http://localhost:3000. */