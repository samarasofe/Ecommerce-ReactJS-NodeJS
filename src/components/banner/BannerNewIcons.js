import React from "react";

const BannerNewIcons = () => {
  return (
    <div className="container">
      <div className="container banner-new-icons mt-md-3">
          <div className="row list-new-icons" align="center">
            <div className="col-3">
              <img width="30" height="20" src="assets/img/icon-img/ico_frete-gratis.jpg" alt="Entregamos em todo o Brasil."></img>
              <span className="titulo-institucional">Frete Grátis</span>
              <span className="subtitulo-institucional">Acima de R$299,00</span>
            </div>
            <div className="col-3">
              <img width="30" height="25" src="assets/img/icon-img/ico_parcelamento.jpg" alt="Compre parcelado."></img>
              <span className="titulo-institucional">Parcelamento</span>
              <span className="subtitulo-institucional">Em até 12x</span>
            </div>
            <div className="col-3">
              <img width="30" height="25" src="assets/img/icon-img/ico_pag-avista.jpg" alt="Pague com pix."></img>
              <span className="titulo-institucional">Pagamento à Vista</span>
              <span className="subtitulo-institucional">5% de desconto no pix</span>
            </div>
            <div className="col-3">
              <img width="30" height="20" src="assets/img/icon-img/ico_enviamos.jpg" alt="Entregamos em todo o Brasil."></img>
              <span className="titulo-institucional">Enviamos</span>
              <span className="subtitulo-institucional">para todo Brasil</span>
            </div>
          </div>
         </div>
       </div>
  );
};

export default BannerNewIcons;
