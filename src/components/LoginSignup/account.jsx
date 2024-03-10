// import React, { useState } from "react";
// import auth from "../../firebase";
// import { useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { data } from "./data";
// import Card from "./card";

// const Account = () => {
//   const signout = () => {
//     alert("you signed out :(");
//     navigate("/");
//     signOut(auth)
//       .then(() => {
//         console.log("you signed out");
//       })
//       .catch((error) => console.log(error));
//   };

//   const navigate = useNavigate();
//   const datashow = data.map((item, index) => (
//     <Card key={index} img={item.img} title={item.title} desc={item.desc} />
//   ));

//   return (
//     <>
//       <div style={{ borderBottom: "0.5px solid #01303f" }}>
//         <h1
//           style={{
//             color: "#01303f",
//             paddingTop: "20px",
//             paddingBottom: "10px",
//             fontWeight: "700",
//             fontSize: "4rem",
//             lineHeight: "1.15",
//             letterSpacing: "-.04rem",
//             maxWidth: "36em",
//           }}
//         >
//           My Websites
//         </h1>
//       </div>
//       <div
//         style={{
//           margin: "auto",
//           width: "85%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           gap: "20px",
//         }}
//       >
//         {" "}
//         {datashow} 
//       </div>
//       <div>
//         <button onClick={signout}>Sign out!</button>
//       </div>
//     </>
//   );
// };

// export default Account;

//////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import auth from "../../firebase";
// import { useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
// import { db } from "../../firebase";
// import Card from "./card";
// import { data } from "./data";
// import "./account.css";


// const Account = () => {
//   const [websiteData, setWebsiteData] = useState([]);
//   const [userIdInput, setUserIdInput] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const unsubscribe = onSnapshot(collection(db, "websites"), (snapshot) => {
//       const dataFromFirestore = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setWebsiteData(dataFromFirestore);
//     });

//     return () => unsubscribe();
//   };

//   const handleAddUser = () => {
//     if (userIdInput) {
//       // Check if the user ID already exists in the websiteData
//       const userExists = websiteData.some((item) => item.userId === userIdInput);
//       if (!userExists) {
//         const newUser = data.find((item) => item.userId === userIdInput);
//         if (newUser) {
//           // Concatenate or merge the new user with the existing websiteData
//           setWebsiteData(prevData => [...prevData, newUser]);
//         }
//       } else {
//         alert("User already exists in the account!");
//       }
//     }
//   };
  

//   const handleRemoveUser = (userIdToRemove) => {
//     const updatedData = websiteData.filter((item) => item.userId !== userIdToRemove);
//     setWebsiteData(updatedData);
//   };

//   const handleSignout = () => {
//     alert("You signed out :(");
//     navigate("/");
//     signOut(auth)
//       .then(() => {
//         console.log("You signed out");
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <>
//       <div className="top-element">
//         <h1> My Websites </h1>
//       </div>
//       <div className="inputContent">
//         <input
//           type="text"
//           placeholder="Enter Project ID"
//           value={userIdInput}
//           onChange={(e) => setUserIdInput(e.target.value)}
//         />
//         <button onClick={handleAddUser}>Add Project</button>
//         <button onClick={() => handleRemoveUser(userIdInput)}>Remove Project</button>
//       </div>
//       <div className="showContent">
//         {websiteData.map((item) => (
//           <Card key={item.id} img={item.img} title={item.title} desc={item.desc} />
//         ))}
//       </div>
//       <div className="outContent">
//         <button  onClick={handleSignout}>Sign out!</button>
//       </div>
//     </>
//   );
// };

// export default Account;

///////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";

import auth from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import Card from "./card"; // <-- Adjusted import
import { data } from "./data";
import "./account.css";

const Account = () => {
  const [websiteData, setWebsiteData] = useState([]);
  const [userIdInput, setUserIdInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("websiteData");
    if (storedData) {
      setWebsiteData(JSON.parse(storedData));
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("websiteData", JSON.stringify(websiteData));
  }, [websiteData]);

  const fetchData = async () => {
    const unsubscribe = onSnapshot(collection(db, "websites"), (snapshot) => {
      const dataFromFirestore = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWebsiteData(dataFromFirestore);
    });

    return () => unsubscribe();
  };

  const handleAddUser = () => {
    if (userIdInput) {
      const userExists = websiteData.some((item) => item.userId === userIdInput);
      if (!userExists) {
        const newUser = data.find((item) => item.userId === userIdInput);
        if (newUser) {
          setWebsiteData((prevData) => [...prevData, newUser]);
        }
      } else {
        alert("User already exists in the account!");
      }
    }
  };

  const handleRemoveUser = (userIdToRemove) => {
    const updatedData = websiteData.filter((item) => item.userId !== userIdToRemove);
    setWebsiteData(updatedData);
  };

  const handleSignout = () => {
    alert("You signed out :(");
    navigate("/");
    signOut(auth)
      .then(() => {
        console.log("You signed out");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="top-element">
        <h1> My Websites </h1>
      </div>
      <div className="inputContent">
        <input
          type="text"
          placeholder="Enter Project ID"
          value={userIdInput}
          onChange={(e) => setUserIdInput(e.target.value)}
        />
        <button onClick={handleAddUser}>Add Project</button>
        <button onClick={() => handleRemoveUser(userIdInput)}>Remove Project</button>
      </div>
      <div className="showContent">
        {websiteData.map((item) => (
          <Card key={item.id} img={item.img} title={item.title} desc={item.desc} />
        ))}
      </div>
      <div className="outContent">
        <button onClick={handleSignout}>Sign out!</button>
      </div>
    </>
  );
};

export default Account;


