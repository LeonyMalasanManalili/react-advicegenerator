//importa in app.tsx react e i due metodi dalla libreria react.
import React, { useState, useEffect } from "react";
//Importazione della pagina di stile per questo applicativo.
import styles from "./App.module.css";
//importa i component che dovranno essere inseriti(creo i componenti in una cartella appostita)
import Card from "./components/CARD/Card";
//Importazione Img Bottone
import Dado from "./assets/icon-dice.svg";
import { visitFunctionBody } from "typescript";

//Per prima cosa creo l'interfaccia per l'api a cui mi collegherò e utilizzerò.
//Andrà creata a seconda della struttura dell'api e essendo un oggetto literal lo strutturerò in questo modo
//tipizzando le chiavi e dandogli valore null iniziale.
export interface CardAdvice {
  text: string | null;
  id: number | null;
}

//Creazione funzione da importare ovvero oggetto da mettere nell'index.
function AdviceGenerator() {
  //Adesso posso collegarmi all'Api
  //Creo una funzione seguita dalle quadre a cui all'interno setto il primo parametro ovverlo stato e nel secondo cosa può far cambiare lo stato
  //in questo modo = useState dell'interfaccia CardAdvice saranno allo stato iniziale null.
  const [advice, setAdvice] = useState<CardAdvice>({ text: null, id: null });
  //Creo un secondo stato per il bottone
  const [clickhere, setClickhere] = useState<number>(1);
  //Andrò dopo settato gli useState() a utilizzare il metodo useEffect() per il collegamento all'api
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      //una volta fetchato utilizzo il then per poter in caso risulatasse resolve
      .then((resolve) => resolve.json())
      .then((Dati) => {
        setAdvice({
          text: Dati.slip.advice,
          id: Dati.slip.id,
        });
      });
  }, [clickhere]);
  //questa funziona mi restituisce questo HTML con Jsx -- ricorda che il trattino alto non viene letto nella class name.
  //Img bottone importata in alto come variabile affinche possa essere richiamata con le graffe e il path al suo interno.
  //Aggiunta onClick buttonDice
  return (
    <div className={styles.Advice_container}>
      <Card advice={advice} />
      <div
        className={styles.buttonDice}
        onClick={() => alert("Mi Hai Cliccato!")}
      >
        <img src={Dado} alt="diceImg" />
      </div>
    </div>
  );
}

//Adesso pocco creare i componenti exportando l'interfaccia rendendola globale e richiamabile

export default AdviceGenerator;
