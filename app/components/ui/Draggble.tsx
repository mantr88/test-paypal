import {clsx} from "clsx";
import React, {useRef, useState, MouseEvent, ReactNode, RefObject} from "react";

type Cursor = "grab" | "default";

interface DraggableProps {
  rootClass?: string;
  children: ReactNode;
  innerRef: RefObject<HTMLDivElement>;
}

interface MouseCoords {
  startX: number;
  startY: number;
  scrollLeft: number;
  scrollTop: number;
}

const Draggable: React.FC<DraggableProps> = ({rootClass = "", children}) => {
  const ourRef = useRef<HTMLDivElement | null>(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  const [cursor, setCursor] = useState<Cursor>("default");
  const mouseCoords = useRef<MouseCoords>({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });

  const handleDragStart = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (!ourRef.current) return;
    const slider = ourRef.current.children[0] as HTMLElement;
    const startX = e.pageX - slider.offsetLeft;
    const startY = e.pageY - slider.offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = {startX, startY, scrollLeft, scrollTop};
    setIsMouseDown(true);
    slider.style.cursor = "grabbing";
  };

  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
    const slider = ourRef.current.children[0] as HTMLElement;
    slider.style.cursor = "default";
  };

  const handleDrag = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current.children[0] as HTMLElement;
    const x = e.pageX - slider.offsetLeft;
    const y = e.pageY - slider.offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;
  };

  return (
    <div
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      className={clsx(rootClass, "flex")}
    >
      {children}
    </div>
  );
};

export default Draggable;
