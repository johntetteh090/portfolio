"use client";

import { useState, useEffect } from "react";

export const useDeviceWidth = () => {
  const medium = 768;
  const large = 1024;
  const xtraLarge = 1400;

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window?.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return {
    width,
    isMedium: width >= medium,
    isLarge: width >= large,
    isExtraLarge: width > xtraLarge,
  };
};
