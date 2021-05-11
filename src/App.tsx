import React, { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './Components/Dashboard';
import { Header } from './Components/Header';
import { TransactionsTable } from './Components/TransacionTable';
import { GlobalStyle } from './styles/global';
export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }
  
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }


  return (
    <>
    <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
    <Dashboard/>

    <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
      <h2>Cadastrar Transação</h2>
    </Modal>
     <GlobalStyle/>
    </>
  );
}


