import styles from "./Huntz.module.css";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image";

import { dbRef } from "../../services/firebaseCon";

import { get, child } from "firebase/database";
import { useEffect, useState } from "react";

export default function Huntz() {
  const [jugadores, setJugadores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    get(child(dbRef, "Jugadores"))
      .then((snapshot) => {
        let arrTemp = [];
        snapshot.forEach((child) => {
          let jugador = child.val();
          arrTemp.push(jugador);

          setJugadores((j) => [...j, jugador]);
        });
        arrTemp.sort((a, b) => b.kills - a.kills);
        setJugadores(arrTemp);
      })
      .then(
        setTimeout(() => {
          setLoading(false);
        }, 500)
      );
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h2 className={styles.title}>Ranking global</h2>
        {loading ? (
          <Loading />
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Puntuación</th>
              </tr>
            </thead>
            <tbody>
              {jugadores.map((dato, i) => (
                <tr key={i}>
                  <td>{dato.name}</td>
                  <td>{dato.kills} </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
      <Footer>
        <div className={styles.footer}>
          Data obtained in realtime with firebase
          <Image
            src="/firebase.svg"
            alt="firebaseImage"
            width="40px"
            height="40px"
          />
        </div>
      </Footer>
    </div>
  );
}

const Loading = () => {
  return (
    <div className={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
