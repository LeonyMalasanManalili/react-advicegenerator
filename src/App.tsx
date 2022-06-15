//importa in app.tsx react e i due metodi dalla libreria react.
import React, {useState,useEffect} from "react";
import logo from "./logo.svg";
//Importazione della pagina di stile per questo applicativo.
import "./App.css";
//importa i component che dovranno essere inseriti(creo i componenti in una cartella appostita)
import Card from "./components/CARD/Card";
// import Button from "./components/BUTTON/Button";
import { textChangeRangeIsUnchanged } from "typescript";

//Per prima cosa creo l'interfaccia per l'api a cui mi collegherò e utilizzerò.
//Andrà creata a seconda della struttura dell'api e essendo un oggetto literal lo strutturerò in questo modo
//tipizzando le chiavi e dandogli valore null iniziale.
export interface CardAdvice{
  text: string|null,
  id: number|null
}


//Creazione funzione da importare ovvero oggetto da mettere nell'index.
function AdviceGenerator() {
  //Adesso posso collegarmi all'Api
  //Creo una funzione seguita dalle quadre a cui all'interno setto il primo parametro ovverlo stato e nel secondo cosa può far cambiare lo stato
  //in questo modo = useState dell'interfaccia CardAdvice saranno allo stato iniziale null.
  const [advice,setAdvice] = useState<CardAdvice>({text:null,id:null})
  //Creo un secondo stato per il bottone
  const [clickhere,setClickhere] = useState<number>(1)
  //Andrò dopo settato gli useState() a utilizzare il metodo useEffect() per il collegamento all'api
  useEffect(()=>{
    fetch("https://api.adviceslip.com/advice")
    //una volta fetchato utilizzo il then per poter in caso risulatasse resolve 
    .then(resolve => resolve.json())
    .then(Dati => {
      setAdvice({
        text: Dati.slip.advice,
        id: Dati.slip.id
      })
    })
    },[clickhere])
  //questa funziona mi restituisce questo HTML con Jsx
  return <div className="Advice-container">
    <Card advice={advice} />
  </div>;
}

//Adesso pocco creare i componenti exportando l'interfaccia rendendola globale e richiamabile

export default AdviceGenerator;
function then(arg0: (resolve: any) => any) {
  throw new Error("Function not implemented.");
}

