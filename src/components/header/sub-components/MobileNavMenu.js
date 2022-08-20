import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{strings["home"]}</Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/"}>
                {strings["home_group_one"]}
              </Link>
              <ul className="sub-menu">
              <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion"}>
                    {strings["home_fashion"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-fashion-seven"}>
                    {strings["home_fashion_seven"]}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/"}>
                {strings["home_group_two"]}
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-furniture-five"}>
                    {strings["home_furniture_five"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-furniture-six"}>
                    {strings["home_furniture_six"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-furniture-seven"}>
                    {strings["home_furniture_seven"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-electronics"}>
                    {strings["home_electronics"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-electronics-two"}>
                    {strings["home_electronics_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-electronics-three"}>
                    {strings["home_electronics_three"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-book-store"}>
                    {strings["home_book_store"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-book-store-two"}>
                    {strings["home_book_store_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-plants"}>
                    {strings["home_plants"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-flower-shop"}>
                    {strings["home_flower_shop"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-flower-shop-two"}>
                    {strings["home_flower_shop_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-organic-food"}>
                    {strings["home_organic_food"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-organic-food-two"}>
                    {strings["home_organic_food_two"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-onepage-scroll"}>
                    {strings["home_onepage_scroll"]}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-grid-banner"}>
                    {strings["home_grid_banner"]}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/home-auto-parts"}>
                    {strings["home_auto_parts"]}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {strings["shop"]}
          </Link>
          <ul className="sub-menu">
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                {strings["shop_layout"]}
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                    {strings["shop_grid_standard"]}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link to={process.env.PUBLIC_URL + "/product/1"}>
                {strings["product_details"]}
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to={process.env.PUBLIC_URL + "/product-tab-right/1"}>
                    {strings["product_tab_right"]}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {strings["collection"]}
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{strings["pages"]}</Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/cart"}>
                {strings["cart"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/checkout"}>
                {strings["checkout"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                {strings["wishlist"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/compare"}>
                {strings["compare"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/my-account"}>
                {strings["my_account"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                {strings["login_register"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/about"}>
                {strings["about_us"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/contact"}>
                {strings["contact_us"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/not-found"}>
                {strings["404_page"]}
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
            {strings["blog"]}
          </Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                {strings["blog_standard"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-no-sidebar"}>
                {strings["blog_no_sidebar"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-right-sidebar"}>
                {strings["blog_right_sidebar"]}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                {strings["blog_details_standard"]}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {strings["contact_us"]}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};

export default multilanguage(MobileNavMenu);
