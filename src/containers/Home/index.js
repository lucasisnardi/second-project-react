import React, { useState, useRef } from "react";

import axios from "axios";

import Burger from "../../assets/burger 1.svg";

import {
  Container,
  H1,
  Image,
  InputLabel,
  Input,
  Button,
 } from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputOrder = useRef();
  const inputclientName = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users",
      {
        order: inputOrder.current.value,
        clientName: inputclientName.current.value,
      });

    setUsers([...users, newUser]);
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Burger} />

      <H1>Faça seu pedido!</H1>

      <InputLabel>Pedido</InputLabel>
      <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada" />

      <InputLabel>Nome do Cliente</InputLabel>
      <Input ref={inputclientName} placeholder="Steve Jobs" />

      <Button to="/usuarios" onClick={addNewUser}>

        Novo Pedido
      </Button>
       
    </Container>
  );
}


export default App;