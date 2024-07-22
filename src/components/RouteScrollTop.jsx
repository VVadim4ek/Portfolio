/*
    File: RouteScrollTop.jsx
    Author: Vadym Lidovskyi
    Copyright: 2023 - Vadym Lidovskyi https://edpark.space
    Version: 1.0
*/

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
