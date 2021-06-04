import React from "react";
import "../styles/404.scss";

export default function () {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <div />
          <h1>404</h1>
        </div>
        <h2>Pagina no encontrada</h2>
        <p>
          La pagina que estas buscando puede haber sido removida renombrada o no
          esta disponible temporalmente. Gracias por su comprensión.
        </p>
        <a href="/">Inicio</a>
      </div>
    </div>
  );
}
