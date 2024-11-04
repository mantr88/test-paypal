"use client";
import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal: React.FC<ModalPortalProps> = ({children}) => {
  const [mounted, setMounted] = useState(false);
  const [modalContainer, setModalContainer] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) {
      setModalContainer(modalRoot);
      setMounted(true);
    }
  }, []);

  return mounted && modalContainer ?
      createPortal(children, modalContainer)
    : null;
};

export default ModalPortal;
