import React from "react";

export default function Header() {
  const list = [{ nome: "João" }, { nome: "Maria" }, { nome: "José" }];
  function showError() {
    throw new Error("Where is");
  }
  return (
    <div>
      <h1>Cabeçalho</h1>
      <p>{list[0].nome}</p>
      <p>{list[1].nome}</p>
      <p>{list[2].nome}</p>
    </div>
  );
}
