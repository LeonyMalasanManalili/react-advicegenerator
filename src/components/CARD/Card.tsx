import React, { useState, useEffect } from "react";
//mi importo l'interfaccia
import { CardAdvice } from "../../App";
//collego il foglio di stile ,importandoli tutti da qui
import styles from "./Card.module.css";
//Importo l'immagine creando const divider che e parte del componente Card che realizzerò 
import Divisore from "../../assets/pattern-divider-desktop.svg";

//Creo un iterfaccio che mi prenderà al suo interno , l'interfaccia CardAdvice importata.
interface Cardstructure {
  advice: CardAdvice;
}

const Card: React.FC<Cardstructure> = ({ advice }) => {
  return (
    //Assegno tutti gli stili importati in con il dot. per ogni classe
    //con jsx riesco a inserire la proprieta advice con valore id
    <div className={styles.Card}>
      <h3 className={styles.advice}> ADVICE # {advice.id}</h3>
      <h2 className={styles.text}>"{advice.text}"</h2>
      <img src={Divisore} alt="Imagginedivisore" className={styles.cardImg} />
    </div>
  );
};

//exporto per renderlo globale e richiamabile
export default Card;
