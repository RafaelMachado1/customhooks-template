import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

export function useCapturaPostagem () {

const [postagens, setPostagens] = useState([]);

//chamada da Api feita dentro do useEffect 
//aqui dá para tratar e agilizar a busca, usando o useState fora e passando o estado
// dentro do array de dependências
useEffect(() => {
    axios
      .get(`${BASE_URL}comments`)
      .then((response) => {
        setPostagens(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return postagens

}