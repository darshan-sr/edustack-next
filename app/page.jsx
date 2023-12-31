"use client";
import React from "react";
import styles from "./HomePage.module.css";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <div className={styles.pageContainer}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Image alt="LOGO" src="/logo.png" width={60} height={60} />
          <h1
            style={{
              fontSize: "25px",
              padding: "10px",
              fontWeight: "normal",
              margin: 0,
            }}
          >
            {" "}
            |{" "}
          </h1>
          <Image alt="CollegeLOGO" src="/logorv.png" width={60} height={60} />
        </div>
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "bolder",
            margin: "20px",
          }}
        >
          Welcome to EduStack for RVITM
        </h1>
        <p
          style={{
            margin: "20px",
            color: "grey",
            fontFamily: "sans-serif",
            marginBottom: "15vh",
          }}
        >
          A Platform Built to Simplify Attendance Tracking & Academics{" "}
        </p>

        <div className={styles.buttonContainer}>
          <Link href="/accounts/signin" style={{ width: "95%" }}>
            <button className={styles.primaryButton}>Sign In </button>
          </Link>
          <button className={styles.secondaryButton}>
            Activate your Account
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
