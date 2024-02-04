import React, { useState } from "react";
import auth from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { data } from "./data";
import Card from "./card";

const Account = () => {
  const signout = () => {
    alert("you signed out :(");
    navigate("/");
    signOut(auth)
      .then(() => {
        console.log("you signed out");
      })
      .catch((error) => console.log(error));
  };

  const navigate = useNavigate();
  const datashow = data.map((item, index) => (
    <Card key={index} img={item.img} title={item.title} desc={item.desc} />
  ));

  return (
    <>
      <div style={{ borderBottom: "0.5px solid #01303f" }}>
        <h1
          style={{
            color: "#01303f",
            paddingTop: "20px",
            paddingBottom: "10px",
            fontWeight: "700",
            fontSize: "4rem",
            lineHeight: "1.15",
            letterSpacing: "-.04rem",
            maxWidth: "36em",
          }}
        >
          My Websites
        </h1>
      </div>
      <div
        style={{
          margin: "auto",
          width: "85%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {" "}
        {datashow} 
      </div>
      <div>
        <button onClick={signout}>Sign out!</button>
      </div>
    </>
  );
};

export default Account;
