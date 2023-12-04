import React from "react";
import "./Style.css"


function Phone({ id, Marca, Modelo, Memoria, Lancamento }) {

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{Marca}</td>
            <td>Modelo:</td>
            <td>{Modelo}</td>
            <td>Memória (GB):</td>
            <td>{Memoria}</td>
            <td>Lançamento:</td>
            <td>{Lancamento}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );


}


export default Phone;