import { useState } from "react";
import EventBanner from "./eventbanner/eventbanner";
import SalesBanner from "./salesbanner/salesbanner";
import NavBar from "./navbar/navbar";
import { isMobile } from "react-device-detect";

function App() {
  let [currentPage, setCurrentPage] = useState("home");

  if (isMobile) {
    switch (currentPage) {
      case "home":
        return (
          <div className="app_main_div_mobile">
            <NavBar stateUpdate={setCurrentPage} />
            <EventBanner
              onAction={() => {
                setCurrentPage("sales");
              }}
            />
          </div>
        );
        break;
      case "sales":
        return (
          <div className="app_main_div_mobile">
            <NavBar stateUpdate={setCurrentPage} />
            <SalesBanner />
          </div>
        );
        break;

      default:
        return (
          <div className="app_main_div_mobile">
            <NavBar stateUpdate={setCurrentPage} />
            <EventBanner />
          </div>
        );
        break;
    }
  } else {
    switch (currentPage) {
      case "home":
        return (
          <div className="app_main_div_desktop">
            <NavBar stateUpdate={setCurrentPage} />
            <EventBanner
              onAction={() => {
                setCurrentPage("sales");
              }}
            />
          </div>
        );
        break;
      case "sales":
        return (
          <div className="app_main_div_desktop">
            <NavBar stateUpdate={setCurrentPage} />
            <SalesBanner />
          </div>
        );
        break;

      default:
        return (
          <div className="app_main_div_desktop">
            <NavBar stateUpdate={setCurrentPage} />
            <EventBanner />
          </div>
        );
        break;
    }
  }
}

export default App;
