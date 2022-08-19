import "./Activities.css";

const Activities = ({ img, alt }) => {
  return (
    <div className="iconBox">
      <img src={img} alt={alt} />
    </div>
  );
};

export default Activities;
