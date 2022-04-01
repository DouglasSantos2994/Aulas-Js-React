import React from "react";

export default function Links({ link }) {

  return (
    <div className="box">
      {link &&
        <a href="/">Home </a>
      }

    </div>
  );
}
