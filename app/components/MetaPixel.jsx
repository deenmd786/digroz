"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import * as fbq from "../lib/metaPixel";

export default function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    fbq.pageView();
  }, [pathname]);

  return null;
}
