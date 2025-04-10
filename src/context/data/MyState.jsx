import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import { auth } from "../../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import axios from "axios";

const MyState = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);

  const signup = async () => {
    if (email === "" || password === "") {
      return alert("required");
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup Successful");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    if (email === "" || password === "") {
      return alert("All fields are required.");
    }
    try {
      const users = await signInWithEmailAndPassword(auth, email, password);
      const user = localStorage.setItem("user", JSON.stringify(users));
      alert("Login Successful");
      setTimeout(() => {
        window.location.href = "/";
      }, 800);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };

  const getProducts = async () => {
    setloading(true);
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setproduct(response.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MyContext.Provider
      value={{
        email,
        setEmail,
        signup,
        password,
        setPassword,
        login,
        logout,
        user,
        product,
        loading,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
