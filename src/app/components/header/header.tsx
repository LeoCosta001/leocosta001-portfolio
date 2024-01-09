"use client";

import React, { useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Image from 'next/image'
import Link from "next/link";
import { BLOCK_ID } from "@/app/models/block-id";
import { NavButton } from "../nav-button/nav-button";

interface HeaderProp {
  selectedBlock: BLOCK_ID;
}

const navButtonList = [
  {
    blockId: BLOCK_ID.HERO,
    label: 'Início',
  },
  {
    blockId: BLOCK_ID.ABOUT,
    label: 'Sobre',
  },
  {
    blockId: BLOCK_ID.EXPERTISE,
    label: 'Habilidades',
  },
  {
    blockId: BLOCK_ID.PROJECTS,
    label: 'Projetos',
  },
  {
    blockId: BLOCK_ID.CONTACT,
    label: 'Contato',
  },
];

export default function Header({ selectedBlock }: HeaderProp) {
  // States
  const [openNav, setOpenNav] = React.useState(false);

  // Effects
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 720 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-1">
      {navButtonList.map((navButton) => (
        <NavButton
          key={navButton.blockId}
          blockId={navButton.blockId}
          label={navButton.label}
          isActive={selectedBlock === navButton.blockId}
        />
      ))}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 md:px-8 md:py-4 border-none bg-opacity-80 backdrop-blur-xl">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link className="flex gap-4 items-center" href="/">
          <Image
            src="/leocosta-logo.svg"
            alt="Leonardo Costa"
            width={150}
            height={60}
            priority
          />
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden md:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
      </Collapse>
    </Navbar>
  );
}
