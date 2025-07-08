import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { motion, type PanInfo, useMotionValue, useTransform, type Transition } from "framer-motion";

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
}

export interface CarouselProps {
  items?: CarouselItem[];
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
  widthVw?: number; // width in viewport width units
}

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS: Transition = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items,
  autoplay = true,
  autoplayDelay = 3500,
  pauseOnHover = false,
  loop = true,
  round = false,
  widthVw = 50,
}: CarouselProps): React.ReactElement {
  if (items === undefined) { return <></>; }
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Track available width
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const containerPadding = 0;
  const itemWidth = containerWidth - containerPadding * 2;
  const trackOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;
    const el = containerRef.current;
    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || (pauseOnHover && isHovered)) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === items.length - 1 && loop) return prev + 1;
        if (prev === carouselItems.length - 1) return loop ? 0 : prev;
        return prev + 1;
      });
    }, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, loop, pauseOnHover, items.length, carouselItems.length]);

  const transitionConfig = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    if (offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) =>
        prev === items.length - 1 && loop
          ? prev + 1
          : Math.min(prev + 1, carouselItems.length - 1)
      );
    } else if (offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) =>
        prev === 0 && loop ? items.length - 1 : Math.max(prev - 1, 0)
      );
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      style={{ width: `${widthVw}vw` }}
      className={`relative overflow-hidden p-4 mx-auto ${
        round
          ? 'rounded-full border border-white'
          : 'rounded-[24px] border border-[#222]'
      }`}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: GAP,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackOffset) }}
        transition={transitionConfig}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, idx) => {
          const rotateY = useTransform(
            x,
            [-(idx + 1) * trackOffset, -idx * trackOffset, -(idx - 1) * trackOffset],
            [90, 0, -90],
            { clamp: false }
          );
          return (
            <motion.div
              key={idx}
              className={`relative shrink-0 flex flex-col items-center justify-center${
                round
                  ? 'items-center justify-center text-center bg-neutral-700 border-0'
                  : 'items-start justify-between bg-neutral-700 border border-[#222] rounded-[12px]'
              } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : '100%',
                rotateY,
                ...(round && { borderRadius: '50%' }),
              }}
            >
              <div className={round ? 'p-0 m-0' : ' p-5'}>
                <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full text-white">
                  {item.icon}
                </span>
              </div>
              <div className="p-5 text-center">
                <h3 className="mb-1 font-black text-lg text-white font-michroma tracking-wider">{item.title}</h3>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <div
        className="flex w-full justify-center"
        style={round ? { position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)' } : undefined}
      >
        <div className="mt-4 flex gap-3 justify-between px-8">
          {items.map((_, idx) => (
            <motion.div
              key={idx}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === idx
                  ? round
                    ? 'bg-white'
                    : 'bg-[#333333]'
                  : round
                  ? 'bg-[#555]'
                  : 'bg-[rgba(51,51,51,0.4)]'
              }`}
              animate={{ scale: currentIndex % items.length === idx ? 1.2 : 1 }}
              onClick={() => setCurrentIndex(idx)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
