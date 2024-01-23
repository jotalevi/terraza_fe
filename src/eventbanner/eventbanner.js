import { LazyLoadImage } from "react-lazy-load-image-component";

function EventBanner(props) {
  return (
    <div className="imagebannerdiv">
      <LazyLoadImage
        alt="/currentbanner.png"
        src="/currentbanner.png"
        className="imagebanner"
        effect="blur"
      />
      <div className="gobt" onClick={props.onAction}>
        <h1 className="gobt_text">Comprar Entradas</h1>
      </div>
    </div>
  );
}

export default EventBanner;
