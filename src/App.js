import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (curUser) => {
    setUser(curUser);
  });

  return (
    <div className="App">
      <Header user={user} />
      <MainPage user={user} setUser={setUser} />
      <Footer />
    </div>
  );
}

export default App;
