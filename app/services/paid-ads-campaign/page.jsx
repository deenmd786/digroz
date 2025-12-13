"use client";
import { useEffect } from "react";
import PaidAdsMain from "./PaidAdsMain";



export default function Page() {
  useEffect(() => {
    fbq.event("ViewContent", {
      content_name: "Meta Ads Services",
      content_category: "Performance Marketing",
    });
  }, []);
  return (
   <div >

      <PaidAdsMain />
    </div>
  );
}
