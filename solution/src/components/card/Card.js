import { languages } from "../../helpers/data";

const Card = () => {
  return (
    <div className="cards-area-container">
      <div className="bars"></div>
      <h1 className="language-title">Languages</h1>
      <div className="cards-container">
        {languages.map((item, index) => {
          //   return <h4>{item.name}</h4>;
          return <Item card={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Card;
