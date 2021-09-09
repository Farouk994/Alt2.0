import React, { useState } from "react";
import "./Loader.css";
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";

const Loader = () => {
   let [color] = useState("#084c8b");
   const override = css`
      display: block;
      margin: 0 auto;
      border-color: #084c8b;
      justify-content: center;
      align-items: center;
      margin-top: 300px;
   `;
   return (
      <div>
         <BounceLoader color={color} css={override} size={75} />
      </div>
   );
};

export default Loader;
