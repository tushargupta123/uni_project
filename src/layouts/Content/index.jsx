import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Order from "../../pages/Order";
import Verification from "../../pages/Verification";
import PoolParticipant from "../../pages/PoolParticipant";
import Api from "../../pages/Api";
import Contact from "../../pages/Contact";
import Dashboard from "../../pages/Dashboard";
import Invalid from "../../pages/Invalid";
import About from "../../pages/About";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import {RequireToken} from "../../Auth";
import Home_main from "../../pages/Home_main";
import Sign_verify from "../../pages/Sign_verify";
import Escrow_main from "../../pages/Escrow_main";
import Escrow_account from "../../pages/Escrow_account";
import QRVerify from "../../pages/QRVerify";

function Content() {
  return (
    <div >
      <Routes>
        <Route path="/home" element={<RequireToken><Home_main /></RequireToken>} />
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={<Order />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/pool_participant" element={<PoolParticipant />} />
        <Route path="/Api" element={<Api />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Invalid />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign_verify" element={<Sign_verify/>} />
        <Route path="/escrow" element={<Escrow_main/>} />
        <Route path="/escrow_account" element={<Escrow_account/>} />
        <Route path="/qr_verify" element={<QRVerify/>} />
      </Routes>
    </div>
  );
}

export default Content;
