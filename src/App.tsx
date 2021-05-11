import React from 'react';
import { Dashboard } from './Components/Dashboard';
import { Header } from './Components/Header';
import { TransactionsTable } from './Components/TransacionTable';
import { GlobalStyle } from './styles/global';
export function App() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <TransactionsTable/>
     <GlobalStyle/>
    </>
  );
}


