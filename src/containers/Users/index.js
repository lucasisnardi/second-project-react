// index.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Burger from "../../assets/burger 2.svg";
import Trash from "../../assets/trash.svg";
import { Container, H1, Image, Button, User, Status } from "./styles";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Burger} />
      <H1>Pedidos</H1>

      <ul>
        {users.map((user) => (
          <User key={user.id}>
            <div>
              <p>Pedido: {user.order}</p>
              <p>Cliente: {user.clientName}</p>
            </div>
            <Status>{user.status}</Status>
            <button onClick={() => deleteUser(user.id)}>
              <img src={Trash} alt="lata-de-lixo" />
            </button>
          </User>
        ))}
      </ul>
      <Button to="/">Voltar</Button>
    </Container>
  );
}

export default Users;
