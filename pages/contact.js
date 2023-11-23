import React, { useState } from "react";
import Layout from "../components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario, por ejemplo, a través de una API.
    console.log("Datos del formulario enviados:", formData);
    // Puedes resetear el formulario después de enviar los datos si es necesario.
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div>
      <Layout title={"home page"}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-5 m-auto text-center">
              <h1>Contactanos</h1>
              <h6 className="subProduct">Siempre puedes contactarnos</h6>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-9 m-auto">
              <div className="row">
                <div className="col-lg-4">
                  <h6>UBICANOS</h6>
                  <p>Medellín Poblado</p>
                  <h6>TELEFONO</h6>
                  <p>74639587</p>
                  <h6>EMAIL</h6>
                  <p>fsistore@gmail.com</p>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Nombre"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control bg-light"
                        placeholder="Apellido"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 py-3">
                      <input
                        type="email"
                        className="form-control bg-light"
                        placeholder="email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 py-3">
                      <textarea
                        name=""
                        className="form-control bg-light"
                        id=""
                        cols="10"
                        rows="5"
                        placeholder="Ingresa tu mensaje"
                      ></textarea>
                    </div>
                  </div>
                  <button className="btn1">Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
