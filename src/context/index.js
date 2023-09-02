import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../services/firebaseConnection";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Context = createContext({});

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const storageUser = localStorage.getItem("@usuarios");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
        navigate("/dm");
      }

      setLoading(false);
    }

    loadUser();
  }, []);

  async function logar(email, senha) {
    setLoadingAuth(true);

    await signInWithEmailAndPassword(auth, email, senha)
      .then(async (value) => {
        let uid = value.user.uid;

        const docRef = doc(db, "users", uid);
        const docDados = await getDoc(docRef);

        let data = {
          uid: uid,
          email: value.user.email,
        };

        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
        toast.success("Bem-Vindo(a) de volta!");
        navigate("/dm");
      })
      .catch((error) => {
        toast.error("Oops! Algo deu errado, " + error);
        console.log(error);
        setLoadingAuth(false);
      });
  }

  function storageUser(data) {
    localStorage.setItem("@usuarios", JSON.stringify(data));
  }

  async function logOut() {
    await signOut(auth)
      .then(() => {
        toast.success("Você foi desconectado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        toast.success(error);
      });
    localStorage.removeItem("@usuarios");
    setUser(null);
  }

  return (
    <Context.Provider
      value={{
        signed: !!user,
        user,
        setUser,
        logar,
        logOut,
        loadingAuth,
        storageUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}
