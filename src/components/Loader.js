import React from "react";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function Loader({ height, width, color }) {
  //--loader css--

  const override = css`
    display: flex !important;
    align-items: center;
    justify-content: center;
    border-color: red;
    width: 100%;
  `;

  return (
    <>
      <ScaleLoader
        color={color ? color : "#ec514c"}
        loading={true}
        css={override}
        height={height ? height : 10}
        width={width ? width : 5}
      />
    </>
  );
}
