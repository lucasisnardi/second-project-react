import React, { useState, useEffect, useRef } from "react";

import axios from "axios";

import Burger from "../../assets/burger 2.svg";
import Trash from "../../assets/trash.svg";



import {
  Container,
  H1,
  Image,
  Input,
  InputLabel,
  Button,
  User,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const inputOrder = useRef();
  const inputclientName = useRef();
  
  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setUsers(newUsers);
    }
    fetchUsers()
  }, []);

    async function deleteUser(userId) {
      await axios.delete(`http://localhost:3001/users/${userId}`)
  
      const newUsers = users.filter((user) => user.id !== userId);
  
      setUsers(newUsers);
    }

  return (
    <Container>
      <Image alt="logo-imagem" src={Burger} />

      <H1>Pedidos</H1>
      <InputLabel></InputLabel>
      <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada Steven Jobs" /> 

      <InputLabel></InputLabel>
      <Input ref={inputclientName} placeholder="1 Batata Grande, 1 X-Bacon, 
      2 Coca-Colas Light" />

      <ul>
        {users.map((user) => (
          <User Key={user.id}>
            <p>{user.order}</p> <p>{user.clientName}</p> <p>{user.price}</p> <p>{user.status}</p>
            <button onClick={() => deleteUser(user.id)}>
              <img src={Trash} alt="lata-de-lixo" />
            </button>
          </User>

        ))}
      </ul>
      <Button to="/">
        Voltar
     </Button>
    </Container>
  );
}


export default Users;