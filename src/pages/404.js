import React, { useEffect } from "react";

export default function NotFound() {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="nf-404">
      <h1>:(</h1>
      <h2>Page not found ..!</h2>
    </div>
  );
}
