import NavBar from "../navbar/navbar";
import { isMobile } from "react-device-detect";

function ThanksBanner(props) {
  if (isMobile) {
    return (
      <div className="app_main_div_mobile">
        <NavBar empty={true} />
        <div className="thanks_div">
          <h1 className="thanks_font_data">Genial!</h1>
          <h1 className="thanks_font_data">
            !Te esperamos aca en Terraza el proximo sabado!
          </h1>
          <br />
          <h1 className="thanks_font_data_link">descargar tickets</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="app_main_div_desktop">
        <NavBar empty={true} />
        <div className="thanks_div">
          <h1 className="thanks_font_data">Genial!</h1>
          <h1 className="thanks_font_data">
            !Te esperamos aca en Terraza el proximo sabado!
          </h1>
          <br />
          <h1 className="thanks_font_data_link">descargar tickets</h1>
        </div>
      </div>
    );
  }
}

export default ThanksBanner;
