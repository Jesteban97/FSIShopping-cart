import React from "react";
import Layout from "../components/Layout";
const About = () => {
  return (
    <div>
      <Layout title={"home page"}>
        <div className="about-us-container">
          <div className="about-us-content">
            <h1>Sobre Nosotros</h1>
            <p>
              Bienvenido a FSIStore, tu destino para la última y más moderna
              moda urbana. En FSIStore, estamos apasionados por proporcionarte
              ropa elegante y de alta calidad que refleje tu estilo único.
            </p>
            <p>
              Nuestro equipo de entusiastas de la moda selecciona cuidadosamente
              una colección de ropa de las marcas más calientes de moda urbana
              de todo el mundo. Ya sea que te guste el estilo casual urbano o un
              estilo callejero más audaz, tenemos algo para todos.
            </p>
            <p>
              En FSIStore, creemos que la moda es una forma de expresión
              personal. Nos esforzamos por empoderar a las personas para que
              abracen su individualidad y muestren su personalidad a través de
              sus elecciones de ropa.
            </p>
            <p>
              Gracias por elegir FSIStore. Únete a nosotros en este viaje de
              moda y eleva tu guardarropa con las últimas tendencias de moda
              urbana.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
