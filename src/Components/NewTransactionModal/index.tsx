import React from "react";
import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModal) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar Transação</h2>

        <form action="">
          <input type="text" placeholder="Título" />
          <br/>
          <input type="number" placeholder="Valor" />
          <br/>
          <input type="text" placeholder="Categoria" />
          <br/>
          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </Modal>
  );
}
