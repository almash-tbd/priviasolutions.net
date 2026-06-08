"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

import Link from "next/link";

interface SlideData {
  title: string;
  desc?: string;
  button: string;
  src: string;
  href?: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title, desc } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[80vw] md:w-[720px] h-[52vh] md:h-[460px] mx-[3vw] md:mx-[24px] z-10 rounded-2xl overflow-hidden shadow-xl"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.96) rotateX(6deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-2xl overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.4,
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent" />
        </div>

        <article
          className={`relative px-6 md:px-12 py-8 transition-all duration-700 ease-in-out flex flex-col justify-center h-full max-w-xl mx-auto z-20 ${
            current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black font-outfit text-white tracking-tight drop-shadow-md">
            {title}
          </h2>
          {desc && (
            <p className="mt-4 text-xs sm:text-sm md:text-base text-slate-100/90 font-medium leading-relaxed drop-shadow-sm max-w-lg mx-auto">
              {desc}
            </p>
          )}
          <div className="flex justify-center">
            <Link 
              href={slide.href || "/contact"}
              className="mt-6 px-6 py-2.5 w-fit mx-auto text-xs sm:text-sm font-bold text-slate-900 bg-white rounded-xl hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-205 shadow-md inline-block text-center"
            >
              {button}
            </Link>
          </div>
        </article>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-12 h-12 flex items-center mx-2 justify-center bg-white border border-slate-200/80 shadow-md rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 cursor-pointer ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="w-5 h-5 text-slate-700" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[80vw] md:w-[720px] h-[52vh] md:h-[460px] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-3vw] md:mx-[-24px] transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      {/* Navigation Controls positioned safely below the card */}
      <div className="absolute flex justify-center w-full top-[calc(100%+1.5rem)] z-30 pb-4">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
