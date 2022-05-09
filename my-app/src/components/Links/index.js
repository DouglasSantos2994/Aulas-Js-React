import React from "react";

const Links = ({ link, texto }) => {
  return (
    <>
      <a href={link}>{texto} </a>
    </>
  );
};
export default Links;
