import React from "react";
import cookie from "js-cookie";
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function LoginCookies({ galleta, setGalleta }) {
  const [username, setUsername] = useState(cookie.get("user") || "")
  const [password, setPassword] = useState("")

  const form = (e) => {
    if (!galleta) {
      cookie.set("login", "true", { expires: 2 });
      setGalleta(cookie.get("login"));
      cookie.set("user", username, { expires: 2 });
    }
  }

  const google = (e) => {
    if (!galleta) {
      cookie.set("login", "true", { expires: 2 });
      setGalleta(cookie.get("login"));
    }
  }
  return (
    <LoginForm google={google} form={form} user={{ username, setUsername }} pass={{ password, setPassword }} />
  );
}
