import React from "react";

const local = () => {
  const nome = localStorage.getItem("nome");

  return <>{nome}</>;
};
export default local;
