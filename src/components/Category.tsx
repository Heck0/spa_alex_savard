import { useEffect, useState } from "react";
import { getToken, getRandomCategories } from "../api/spotify";
import "../styles/Category/category.scss";
import CategoryCard from "./CategoryCard";
import CategoryClass from "../data/Category";

const Category = () => {
  const [categories, setCategories] = useState<any[]>([]);

  const fetchCategories = async () => {
    const token: string = await getToken();
    const categories = await getRandomCategories(token);
    setCategories(categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="categories" id="spotify">
      <div className="title">
        <h2 className="title__h2">L'API Spotify </h2>
        <p className="title__secondTitle">
          Trouvez mes coups de <span>&#10084;</span>
        </p>
      </div>
      <button className="btn__fetch" onClick={fetchCategories}>
        Changer les genres
      </button>

      <div className="cards">
        {categories &&
          categories.map((category: CategoryClass) => (
            <CategoryCard key={category.categoryId} {...category} />
          ))}
      </div>
    </section>
  );
};

export default Category;
