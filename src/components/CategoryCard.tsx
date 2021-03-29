import { CategoryTypes } from "../data/Category";
import "../styles/Category/categoryCard.scss";
import { Reveal, Tween } from "react-gsap";

enum favorites {
  INDIE = "indie",
  FOLK = "roots",
  ALTERNATIVE = "alternative",
  CHILL = "chill",
}

const CategoryCard = ({ id, name, icon }: CategoryTypes) => {
  console.log(id);

  const isMyFavorite: boolean =
    id.includes(favorites.INDIE) ||
    id.includes(favorites.FOLK) ||
    id.includes(favorites.ALTERNATIVE) ||
    id.includes(favorites.CHILL);

  return (
    <Reveal>
      <Tween from={{ opacity: 0, transform: "translateY(10rem)" }} duration={1}>
        <div className="card">
          <div className="img--container">
            <img
              src={icon}
              alt={`Cover icon of ${name}`}
              className="card__img"
            />

            <div className="card__title">
              {isMyFavorite && <span className="card__favorite">&#10084;</span>}
              <h3>{name}</h3>
            </div>
          </div>
        </div>
      </Tween>
    </Reveal>
  );
};

export default CategoryCard;
