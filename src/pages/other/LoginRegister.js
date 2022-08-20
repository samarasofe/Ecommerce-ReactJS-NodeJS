import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
// import { useForm } from "react-hook-form";
import axios from "axios";

const LoginRegister = ({ location }) => {
  const { pathname } = location;
  // const { register } = useForm();
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ fullname, setFullname ] = useState("");
  const [ birthDate, setBirthDate ] = useState("");
  const [ roles, setRoles ] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
      // alert(`The name you entered was: ${birthDate}`)
  
    axios.post('https://nest-e-commerce.onrender.com/register', {
      username: username ,
      password: password ,
      email: email ,
      fullname: fullname ,
      birthDate: birthDate ,
      roles: roles
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  
  return (
    <Fragment>
      <MetaTags>
        <title>Super Copo | Login</title>
        <meta
          name="description"
          content="| Super Copo Acrílicos - Copos Personalizados e Lisos."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Entrar Cadastrar
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Entrar</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Cadastrar</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="user-name"
                                placeholder="Informe seu e-mail"
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Insira sua senha"
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Lembre-me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Esqueci minha Senha
                                  </Link>
                                </div>
                                <button type="submit">
                                  <span>Entrar</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={handleSubmit} >
                              <input 
                                type="text"
                                name="username"
                                placeholder="Nome de usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                              />
                              <input 
                                type="password"
                                name="password"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <input 
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <input 
                                type="text"
                                name="fullname"
                                placeholder="Nome completo"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                              />
                              <input 
                                type="date"
                                name="birthDate"
                                placeholder="Insira sua data de nascimento"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                              />
                              <input 
                                type="text"
                                name="roles"
                                placeholder="roles"
                                value={roles}
                                onChange={(e) => setRoles(e.target.value)}
                              />
                              
                              <div className="button-box">
                                <button type="submit">
                                  <span>Cadastrar</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object
};

export default LoginRegister;
