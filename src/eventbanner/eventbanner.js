function EventBanner(props) {
  return (
    <div className="imagebannerdiv" onClick={props.onAction}>
      <img src="/currentbanner.png" className="imagebanner" />
      <div className="gobt">
        <h1 className="gobt_text">Comprar Entradas</h1>
      </div>
    </div>
  );
}

export default EventBanner;
