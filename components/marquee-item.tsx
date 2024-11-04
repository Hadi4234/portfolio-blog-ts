"use client";
import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = () => {
  return (
    <div className="flex MyGradient flex-col gap-10 w-full  lg:w-3/4">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: -1000 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", }}
        className="flex flex-row gap-5 "
      >
        <div className="flex px-10 py-8 bg-white text-black">HTML</div>
        <div className="flex px-10 py-8 bg-white text-black">CSS</div>
        <div className="flex px-10 py-8 bg-white text-black">Bootstrap</div>
        <div className="flex px-10 py-8 bg-white text-black">Tailwind</div>
        <div className="flex px-10 py-8 bg-white text-black">MUI</div>
        <div className="flex px-10 py-8 bg-white text-black">Jqury</div>
        <div className="flex px-10 py-8 bg-white text-black">Javascript</div>
        <div className="flex px-10 py-8 bg-white text-black">Typescript</div>
        <div className="flex px-10 py-8 bg-white text-black">C</div>
        <div className="flex px-10 py-8 bg-white text-black">PHP</div>
        <div className="flex px-10 py-8 bg-white text-black">Java</div>
        <div className="flex px-10 py-8 bg-white text-black">C++</div>
        <div className="flex px-10 py-8 bg-white text-black">HTML</div>
        <div className="flex px-10 py-8 bg-white text-black">CSS</div>
        <div className="flex px-10 py-8 bg-white text-black">Bootstrap</div>
        <div className="flex px-10 py-8 bg-white text-black">Tailwind</div>
        <div className="flex px-10 py-8 bg-white text-black">MUI</div>
        <div className="flex px-10 py-8 bg-white text-black">Jqury</div>

      </motion.div>

      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="flex flex-row gap-5"
      >
        <div className="flex px-10 py-8 bg-white text-black">Laravel</div>
        <div className="flex px-10 py-8 bg-white text-black">Javascript</div>
        <div className="flex px-10 py-8 bg-white text-black">Node.js</div>
        <div className="flex px-10 py-8 bg-white text-black">React.js</div>
        <div className="flex px-10 py-8 bg-white text-black">Typescript</div>
        <div className="flex px-10 py-8 bg-white text-black">Next.js</div>
        <div className="flex px-10 py-8 bg-white text-black">Git</div>
        <div className="flex px-10 py-8 bg-white text-black">Nest.js</div>
        <div className="flex px-10 py-8 bg-white text-black">Zod</div>
        <div className="flex px-10 py-8 bg-white text-black">Express.js</div>
        <div className="flex px-10 py-8 bg-white text-black">Linux</div>
        <div className="flex px-10 py-8 bg-white text-black">Nginx</div>
        <div className="flex px-10 py-8 bg-white text-black">Laravel</div>
        <div className="flex px-10 py-8 bg-white text-black">Typescript</div>
        <div className="flex px-10 py-8 bg-white text-black">Node.js</div>
        <div className="flex px-10 py-8 bg-white text-black">React.js</div>
        <div className="flex px-10 py-8 bg-white text-black">Javascript</div>

      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: -1000 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", }}
        className="flex flex-row gap-5 "
      >
        <div className="flex px-10 py-8 bg-white text-black">Typescript</div>
        <div className="flex px-10 py-8 bg-white text-black">C</div>
        <div className="flex px-10 py-8 bg-white text-black">PHP</div>
        <div className="flex px-10 py-8 bg-white text-black">Java</div>
        <div className="flex px-10 py-8 bg-white text-black">C++</div>
        <div className="flex px-10 py-8 bg-white text-black">HTML</div>
        <div className="flex px-10 py-8 bg-white text-black">CSS</div>
        <div className="flex px-10 py-8 bg-white text-black">Bootstrap</div>
        <div className="flex px-10 py-8 bg-white text-black">Tailwind</div>
        <div className="flex px-10 py-8 bg-white text-black">MUI</div>
        <div className="flex px-10 py-8 bg-white text-black">HTML</div>
        <div className="flex px-10 py-8 bg-white text-black">CSS</div>
        <div className="flex px-10 py-8 bg-white text-black">Bootstrap</div>
        <div className="flex px-10 py-8 bg-white text-black">Tailwind</div>
        <div className="flex px-10 py-8 bg-white text-black">MUI</div>
        <div className="flex px-10 py-8 bg-white text-black">Jqury</div>
        <div className="flex px-10 py-8 bg-white text-black">Javascript</div>
        <div className="flex px-10 py-8 bg-white text-black">Typescript</div>
        <div className="flex px-10 py-8 bg-white text-black">C</div>
      </motion.div>
    </div>
  );
};

export default MarqueeItem;