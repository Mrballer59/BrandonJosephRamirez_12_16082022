import "./Consumption.css";
import propTypes from "prop-types";
/**
 * These are the components that will show key consumption of user
 * @param {string} className To set className of the elements displayed
 * @param {string} img img image src
 * @param {number} data
 * @param {string} datatype Type of the data (carbohydrate, proteins, calories , lipids)
 * @returns React Componet consumption
 */

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
Consumption.protoTypes = {
  img: propTypes.string.isRequired,
  data: propTypes.number.isRequired,
  datatype: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
};
