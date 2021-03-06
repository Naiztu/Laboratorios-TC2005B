import React from "react";
import Layaout from "../components/Layaout";
import cookie from "js-cookie";
import { useState } from "react";
import LoginCookies from "../components/LoginCookies";
import LogoutCokies from "../components/LogoutCokies";

export default function Laboratorio14() {
  const [galleta, setGalleta] = useState(cookie.get("login") || false);

  return (
    <Layaout>
      {galleta ? (
        <LogoutCokies setGalleta={setGalleta} />
      ) : (
        <LoginCookies galleta={galleta} setGalleta={setGalleta} />
      )}
    </Layaout>
  );
}
