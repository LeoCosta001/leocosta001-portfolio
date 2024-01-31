"use client";

import { BLOCK_ID } from "@/app/models/block-id";
import { Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ClassNameValue } from "tailwind-merge";
import { tv, type VariantProps } from 'tailwind-variants';

const blockWrapping = tv({
  base: 'flex flex-col items-center justify-center overflow-hidden px-8 py-16 relative md:px-24 md:py-24 [&>*]:max-w-5xl [&>*]:w-full [&>*]:font-light',
  variants: {
    height: {
      screen: 'min-h-[calc(100vh-64px)]',
      small: 'min-h-[calc(100vh-150px)]',
      fitContent: 'min-h-fit'
    },
    bgColor: {
      white: 'bg-white',
      lightness: 'bg-gradient-to-br to-blue-500/10 from-blue-500/35',
      main: 'bg-primary',
      darkness: 'bg-gradient-to-tl to-primary-darkness/85 via-60% via-primary-darkness/100 via-primary-darkness/100 from-primary-darkness/100',
    },
  },
  defaultVariants: {
    height: 'small',
    bgColor: 'white',
  },
})

interface BlockWrappingProps extends VariantProps<typeof blockWrapping> {
  children: JSX.Element;
  blockId: BLOCK_ID;
  title?: string;
  className?: ClassNameValue;
  handleInView: (inView: boolean, blockId: BLOCK_ID) => void;
}

export default function BlockWrapping({
  children,
  blockId,
  title,
  className,
  handleInView,
  height,
  bgColor
}: BlockWrappingProps) {
  const { ref, inView } = useInView({
    threshold: 0.35, // Percentage of the element in view to trigger the event
  });

  // Methods
  const getTitleColor = (bgColor?: keyof typeof blockWrapping.variants.bgColor): 'dark' | 'light' => {
    if (!bgColor) return 'dark';

    switch (bgColor) {
      case 'darkness':
        return 'light';
      default:
        return 'dark';
    }
  }

  // Effects
  useEffect(() => {
    handleInView(inView, blockId);
  }, [inView]);

  return (
    <section ref={ref} id={blockId} className={blockWrapping({ height, bgColor, className })}>
      {typeof title === 'string' && (
        <div className="flex flex-col items-center gap-6 mb-9">
          <Typography
            data-title-color={getTitleColor(bgColor)}
            variant="h2"
            className="font-light data-[title-color=light]:text-white"
          >
            {title}
          </Typography>
          <div className="h-0.5 bg-orange-500 w-24" />
        </div>
      )}
      {children}
    </section>
  );
}