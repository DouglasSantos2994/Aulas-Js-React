import React from "react";

const session = () => {
  const numero = sessionStorage.getItem("numero");

  return <>{numero}</>;
};
export default session;
