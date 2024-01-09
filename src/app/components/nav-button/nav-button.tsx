"use client";

import React from "react";
import {
  Button,
} from "@material-tailwind/react";
import { BLOCK_ID } from "@/app/models/block-id";
import { scrollToBlock } from "@/app/utils/scroll-to-block";

interface NavButtonProps {
  blockId: BLOCK_ID;
  label: string;
  isActive: boolean;
}

export function NavButton({ blockId, label, isActive }: NavButtonProps) {
  return (
    <li className="flex items-center justify-center">
      <Button onClick={() => scrollToBlock(blockId)} size="sm" variant="text" color={isActive ? 'blue' : 'black'}>
        {label}
      </Button>
    </li>
  );
}
