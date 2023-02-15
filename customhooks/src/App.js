import React, { useState, useEffect } from "react";
import { BASE_URL } from "./constants/constants";
import axios from "axios";
import { Title, NameContainer, PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { useCapturaNome } from "./hook/useCapturaNome";
import { useCapturaPostagem } from "./hook/useCapturaPostagem";
import { useBuscaDados } from "./hook/useBuscaDados";

function App() {
//Buscar informações dos usuário, não é responsabilidade do App.js

//chamada da APi atravez do Custom hook
//const nomeUsuarios = useCapturaNome();
//const postagens = useCapturaPostagem();

  //Chamada da Api através do Hook generico useBuscaDados criado para chamar qualquer dado da APi
  //Nesse caso tem que passar a url por parametro e passar o array vazio no final
  const nomeUsuarios = useBuscaDados(`${BASE_URL}users`, [])
  const postagens = useBuscaDados(`${BASE_URL}comments`, [])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {nomeUsuarios.map((usuario) => {
          return (
            <Card
              key={usuario.id}
              text={usuario.name}
              backgroudColor={'nome'}
              textColor={'nome'}
            />)
        })}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>

        {postagens.map((post) => {
          //console.log(post);
          return (
            <Card
              key={post.id}
              text={post.body}
              backgroudColor={'#1dc690'}
              textColor={'#ffffff'}
            />)
        })}
      </PostContainer>
    </div>
  );
}

export default App;



