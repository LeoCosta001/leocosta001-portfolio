"use client";

import { Typography } from "@material-tailwind/react";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center flex-1
      min-h-fit text-white bg-primary-darkness px-8 py-16 md:px-24 md:py-11">
      <Typography variant="lead" className="text-center">Vivendo, aprendendo e melhorando a cada dia.</Typography>
    </footer>
  );
}