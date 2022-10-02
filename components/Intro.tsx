import React from "react";
import { motion } from "framer-motion";
import {
  Astrix,
  Comet,
  GreenShapes,
  RedColumn,
  RedRectangle,
  Snake,
  Sun,
  Triangle,
} from "./Icon";

export default function Intro() {
  return (
    <section className="shopify-section shopify-section--symbol-text">
      <section
        className="section--symbol-text"
        aria-label="Figma‘s collection of layers and components for you and your friends."
      >
        <div className="contained">
          <motion.h2
            className="blurb"
            initial={{ opacity: 0, y: "10%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          >
            <span className="word">FIGMA&apos;S </span>
            <Astrix />
            <span className="word"> COLLECTION </span>
            <RedColumn />
            <span className="word">OF </span>
            <br />
            <span className="word-layers">LAYERS</span> <RedRectangle />{" "}
            <span className="word">AND </span>
            <GreenShapes />
            <span className="word-components">COMPONENTS</span> <Sun />
            <span className="word"> FOR YOU</span>
            <Comet />
            <span className="word"> AND </span>
            <Snake />
            <span className="word"> YOUR </span>
            <Triangle />
            <span className="word">FRIENDS</span>
          </motion.h2>
        </div>
      </section>
    </section>
  );
}
