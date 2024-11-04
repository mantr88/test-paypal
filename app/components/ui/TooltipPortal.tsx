"use client";
import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";

interface TooltipPortalProps {
  children: React.ReactNode;
}

const TooltipPortal: React.FC<TooltipPortalProps> = ({children}) => {
  const [mounted, setMounted] = useState(false);
  const [tooltipContainer, setTooltipContainer] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    const tooltipRoot = document.getElementById("tooltip-root");
    if (tooltipRoot) {
      setTooltipContainer(tooltipRoot);
      setMounted(true);
    }
  }, []);

  return mounted && tooltipContainer ?
      createPortal(children, tooltipContainer)
    : null;
};

export default TooltipPortal;
