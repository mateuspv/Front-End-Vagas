import React from "react";

export default ({ technologies }) => {
  const Itens = technologies.map((name, i) => {
    const icon = require(`./../assets/techlogos/${name.trim()}.svg`);

    return (
      <li key={i}>
        <img src={icon} alt={name} />
      </li>
    );
  });

  return <ul>{Itens}</ul>;
};
