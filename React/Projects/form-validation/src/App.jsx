import React, { useRef } from "react";

function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cityRef = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!nameRef.current.value.trim()) {
      alert("Name is required!");
      nameRef.current.focus();
      return;
    }

    const emailValue = emailRef.current.value.trim();
    if (!emailValue) {
      alert("Email is required!");
      emailRef.current.focus();
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRejex.test(emailValue)) {
      alert("Invalide email format");
      emailRef.current.focus();
      return;
    }

    if (!passwordRef.current.value.trim()){
      alert("Password is required!");
      passwordRef.current.focuse();
      return;
    }
    if (!cityRef.current.value.trim()){
      alert("City is required!");
      cityRef.current.focus();
      return;
    }

    alert(`Form submitted!\nName: ${nameRef.current.value}\nEmail: ${emailRef.current.value}\nPassword: ${passwordRef.current.value}\nCity: ${cityRef.current.value}`)

    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    cityRef.current.value = "";
  };
}