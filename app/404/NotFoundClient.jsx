"use client";

import { useSearchParams } from "next/navigation";

export default function NotFoundClient() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");

  return (
    <div>
      <h1>404 – Page Not Found</h1>
      {ref && <p>Referrer: {ref}</p>}
    </div>
  );
}
