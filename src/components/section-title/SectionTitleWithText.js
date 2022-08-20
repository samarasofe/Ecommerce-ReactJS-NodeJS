import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Quem somos nós</h5>
          <h1>Bem-vindo à Super Copo</h1>
          <p>
            A Super Copo está no mercado de copos acrílicos desde 2012, 
            neste período conquistou respeito e confiança.
            Consolidada entre as grandes do mercado de produtos Lisos e Personalizados, 
            atende a todo o Brasil com qualidade e rapidez.{" "}
          </p>
          <p>
            A injeção própria garante uma variedade de produtos e cores,
            sendo a líder em novidades, além de oferecer um atendimento especial e personalizado.
            No segmento de personalizados está presente em todos os tipos de eventos, 
            com lindos produtos que atendem a todos os gostos e públicos.
          </p>
          <p>
            Atua também no mercado de Produtos Lisos com uma linha Premium e Light,
            oferecendo o que tem de melhor, para pequenas e grandes empresas.
          </p>
          <p>
            Sempre investindo em novos processos, equipamentos,
            moldes e inovações, para atender em grande quantidade no atacado.
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
