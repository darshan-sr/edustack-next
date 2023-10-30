"use client";
import { auth } from "@/app/firebase/firebase";
import { signOut } from "firebase/auth";
import React from "react";

const StudentHomePage = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("logged out!");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>
        <h1>Welcome Student</h1>
      </div>
      <button
        onClick={handleLogout}
        style={{ width: "100px", backgroundColor: "blue", color: "white" }}
      >
        logout
      </button>
    </div>
  );
};

export default StudentHomePage;
