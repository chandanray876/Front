import React, { useEffect } from "react";

export default function BadRequest() {
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="nf-404">
      <h1>:(</h1>
      <h2>Something went wrong ..!</h2>
    </div>
  );
}
