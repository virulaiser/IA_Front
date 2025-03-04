import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal2 from "../component/Modal2";

function Compo() {
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
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setChatResponse(`El chatbot dice: "${message}" y hace esto y aquello.`);
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

export default Compo;
