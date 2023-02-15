import { useState, useEffect } from "react";
import axios from "axios";

//Hook para buscar qualquer dado da API
export function useBuscaDados (urlApi, estadoInicial){

    const [dados, setDados] = useState(estadoInicial)

    const buscaDados = async () => {
        try{
            const result = await axios.get(urlApi)
            setDados(result.data)
        }catch(error){
            console.log(error)

        }
    }

    //useEffect feito fora da função de buscar dados
    useEffect(() =>{
        buscaDados()
    }, [])

    return dados;
}