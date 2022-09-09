import "./Activities.css";
/**
 * This creates the activity element for the side navigation bar
 * @param {String} img = Image path
 * @param {String} alt = Image description
 * @returns Activity component
 */

const Activities = ({ img, alt }) => {
  return (
    <div className="iconBox">
      <img src={img} alt={alt} />
    </div>
  );
};

export default Activities;
