import NavBar from "../navbar/navbar";
import { isMobile } from "react-device-detect";

function FailBanner(props) {
  if (isMobile) {
    return (
      <div className="app_main_div_mobile">
        <NavBar />
        <div className="thanks_div">
          <h1 className="thanks_font_data">
            No pudimos completar la transacción.
          </h1>
          <h1 className="thanks_font_data">Ningun cobro será efectuado.</h1>
          <h1 className="thanks_font_data">
            Caso veas un descuento en su cuenta, este será anulado a la
            brevedad.
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="app_main_div_desktop">
        <NavBar />
        <div className="thanks_div">
          <h1 className="thanks_font_data">
            No pudimos completar la transacción.
          </h1>
          <h1 className="thanks_font_data">Ningun cobro será efectuado.</h1>
          <h1 className="thanks_font_data">
            Caso veas un descuento en su cuenta, este será anulado a la
            brevedad.
          </h1>
        </div>
      </div>
    );
  }
}

export default FailBanner;
