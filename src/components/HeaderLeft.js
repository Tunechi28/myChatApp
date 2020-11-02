import React from "react";
import * as Icon from "react-feather";
const HeaderLeft = () => {
  return (
    <div className="header-left">
      <a id="menuMain" href="" className="burger-menu">
        <Icon.Menu />
      </a>
      <a id="menuBack" href="" className="burger-menu d-none">
        <Icon.ArrowLeft />
      </a>

      <div className="header-search">
        <Icon.Search />
        <input
          type="search"
          className="form-control"
          placeholder="Search for conversations"
        />
      </div>
    </div>
  );
};
export default HeaderLeft;
