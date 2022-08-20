import React from "react";

const ShopSearch = () => {
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Procurar </h4>
      <div className="pro-sidebar-search mb-50 mt-25">
        <form className="pro-sidebar-search-form" action="#">
          <input type="text" placeholder="Busque aqui..." />
          <button>
            <i className="pe-7s-search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopSearch;
