import { useState, useEffect, useRef } from "react";

function SalesBanner() {
  let [mail, setMail] = useState("");
  let [qty, setQty] = useState(1);
  const formRef = useRef("form_");

  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (data && err === "" && !isLoading) formRef.current.submit();
  }, [data]);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://t5d6j7nvp7mt37ab5ft6itytlm0rhqwj.lambda-url.us-east-1.on.aws/?action=init&price=${
          15000 * qty * 1.05
        }&qty=${qty}&mail=${mail}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      if (err === "") {
      }
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <>
      <div className="imagebannerdiv">
        <div className="input_tab">
          <h1 className="input-label">Correo Electronico</h1>
          <input
            className="def_input_text"
            type="text"
            placeholder="micorreo@domain.com"
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
        </div>

        <div className="input_tab">
          <h1 className="input-label">Numero de entradas</h1>
          <div className="_npb_div">
            <div
              className="_nbp_action_bt"
              onClick={() => {
                setQty(qty >= 2 ? qty - 1 : qty);
              }}
            >
              <h1 className="_nbp_action_text"> - </h1>
            </div>
            <div className="_nbp_value">
              <h1 className="_nbp_value_text"> {qty} </h1>
            </div>
            <div
              className="_nbp_action_bt"
              onClick={() => {
                setQty(qty <= 4 ? qty + 1 : qty);
              }}
            >
              <h1 className="_nbp_action_text"> + </h1>
            </div>
          </div>
        </div>
        <div className="input_tab">
          <h1 className="sumary-text">{"Total: $" + 15000 * qty * 1.05}</h1>
          <button
            className={isLoading ? "gobt_loading" : "gobt"}
            onClick={handleClick}
            disabled={isLoading}
          >
            <h1 className="gobt_text">{isLoading ? "..." : "Comprar"}</h1>
          </button>
        </div>
      </div>
      <form
        style={{ display: "none" }}
        action={data ? data.url : ""}
        method="post"
        ref={formRef}
      >
        <input type="hidden" name="token_ws" value={data ? data.token : ""} />
      </form>
    </>
  );
}

export default SalesBanner;
