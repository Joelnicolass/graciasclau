import React, { useState } from "react";

import ConfettiExplosion from "react-confetti-explosion";

import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Lottie from "react-lottie-player";
import lottieJson from "./assets/yoda.json";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Confetti />
      <div
        style={{
          overflow: "hidden",
          width: "100vw",
          cursor: "pointer",
        }}
      >
        <marquee>
          <motion.h1
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            style={{
              color: "white",
              fontSize: "5rem",
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            GRACIAS CLAU
          </motion.h1>
        </marquee>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}
        style={{
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Que la agilidad te acompañe
      </motion.h2>

      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
};

export default App;
