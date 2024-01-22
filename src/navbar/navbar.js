import { useState } from "react";
import { isMobile } from "react-device-detect";

function NavBar(props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={open ? "desktop-nav-bar-show" : "desktop-nav-bar-hidden"}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className={isMobile ? "mob_nav_icon" : "navbaricon"}
      >
        <path
          d="M4 8H28V10.6667H4V8ZM4 14.6667H28V17.3333H4V14.6667ZM4 21.3333H28V24H4V21.3333Z"
          fill="white"
        />
      </svg>

      <h1
        className="nav-bar-texts"
        onClick={() => {
          props.stateUpdate("home");
        }}
      >
        HOME
      </h1>
      <h1
        className="nav-bar-texts"
        onClick={() => {
          props.stateUpdate("sales");
        }}
      >
        COMPRAR ENTRADAS
      </h1>
      <h1
        className="nav-bar-texts"
        onClick={() => {
          props.stateUpdate("events");
        }}
      >
        EVENTOS ANTERIORES
      </h1>
      <h1 className="nav-bar-texts" onClick={() => {}}>
        INSTAGRAM
      </h1>
      <h1
        className="nav-bar-texts"
        onClick={() => {
          props.stateUpdate("faq");
        }}
      >
        FAQ
      </h1>
    </div>
  );
}

export default NavBar;
