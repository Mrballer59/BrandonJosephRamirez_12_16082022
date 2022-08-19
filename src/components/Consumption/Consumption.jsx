import "./Consumption.css";

function Consumption({ className, img, data, dataType }) {
  return (
    <div className={"keyDataDiv " + className}>
      <div className={"dataImg " + className + "backGround"}>
        <img className={className + "Img"} src={img} alt={className} />
      </div>
      <div className="dataText">
        <p>{data}</p>
        <p>{dataType}</p>
      </div>
    </div>
  );
}

export default Consumption;
