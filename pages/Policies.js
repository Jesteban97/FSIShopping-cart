import React from "react";
import Layout from "../components/Layout";
const Policies = () => {
  return (
    <div>
      <Layout title={"home page"}>
        <div className="policies-container">
          <div className="policies-content">
            <h1>Políticas</h1>

            <div className="policy-section">
              <h2>Política de Tratamiento de Datos</h2>
              <p>
                En StreetWearShop, nos comprometemos a proteger la privacidad de
                nuestros clientes. Toda la información proporcionada se
                utilizará únicamente con el propósito de procesar pedidos y
                mejorar la experiencia de compra. No compartiremos ni venderemos
                su información a terceros.
              </p>
            </div>

            <div className="policy-section">
              <h2>Política de Devoluciones</h2>
              <p>
                Aceptamos devoluciones dentro de los 30 días posteriores a la
                compra. Los artículos deben estar en su estado original y sin
                usar. Los gastos de envío de devolución serán responsabilidad
                del cliente, excepto en casos de productos defectuosos o errores
                en el envío.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Policies;
