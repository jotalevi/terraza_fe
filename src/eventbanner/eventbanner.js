function EventBanner(props) {
  return (
    <div className="imagebannerdiv">
      <img src="/currentbanner.png" className="imagebanner" />
      <div className="gobt" onClick={props.onAction}>
        <h1 className="gobt_text">Comprar Entradas</h1>
      </div>
    </div>
  );
}

export default EventBanner;
