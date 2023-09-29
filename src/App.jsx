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
              fontSize: "7rem",
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            GRACIAS CLAU
          </motion.h1>
        </marquee>
      </div>

      <motion.div
        whileHover={{ scale: 0.8 }}
        drag
        dragConstraints={{
          top: -100,
          left: -100,
          right: 100,
          bottom: 100,
        }}
        dragElastic={0.6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 2 }}
          style={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "3rem",
          }}
        >
          Que la agilidad te acompañe
        </motion.h2>

        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 300, height: 300 }}
        />
      </motion.div>
    </div>
  );
};

export default App;
