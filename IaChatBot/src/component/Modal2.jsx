import { Modal, Button, Form, Alert } from "react-bootstrap";
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

export default function Modal2({
  show,
  handleClose,
  title,
  onSend,
  isLoading,
  response,
  error,
}) {
  const [inputText, setInputText] = useState("");

  const handleInputChange = useCallback((event) => {
    setInputText(event.target.value);
  }, []);

  const handleSend = useCallback(() => {
    onSend(inputText);
    setInputText("");
  }, [onSend, inputText]);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          as="textarea"
          rows={3}
          value={inputText}
          onChange={handleInputChange}
          placeholder="Escribe tu mensaje..."
          disabled={isLoading}
        />

        {isLoading && <p>Enviando...</p>}
        {response && <Alert variant="success">{response}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} disabled={isLoading}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSend} disabled={isLoading}>
          Enviar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

Modal2.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  onSend: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  response: PropTypes.string,
  error: PropTypes.string,
};
