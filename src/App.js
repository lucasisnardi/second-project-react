import React, { useState, useRef } from "react";

import axios from "axios";
import Burger from "./assets/burger 1.svg";



import {
  Container,
  H1,
  Image,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputOrder = useRef();
  const inputclientName = useRef();

  async function addNewUser() {

    const data = await axios.post("http://localhost:3001/users", {
      pedido: inputOrder.current.value,
      name: inputclientName.current.value,
    });
      console.log(data)
  //   setUsers([
  //     ...users,
  //     {
  //       id: Math.random(),
  //       pedido: inputOrder.current.value,
  //       name: inputclientName.current.value,
  //     },
  //   ]);
 }

  return (
    <Container>
      <Image alt="logo-imagem" src={Burger} />

      <H1>Faça seu pedido!</H1>

      <InputLabel>Pedido</InputLabel>
      <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada" />

      <InputLabel>Nome do Cliente</InputLabel>
      <Input ref={inputclientName} placeholder="Steve Jobs" />

      <Button onClick={addNewUser}>

        Novo Pedido
      </Button>
      <ul>
        {users.map((user) => (
          <User Key={user.id}>
            <p>{user.order}</p> <p>{user.clientName}</p> <p>{user.price}</p> <p>{user.status}</p>
            
          </User>

        ))}
      </ul>

    </Container>
  );
}


export default App;