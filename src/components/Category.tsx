import { useEffect, useState } from "react";
import { getToken, getRandomCategories } from "../api/spotify";
import "../styles/category.scss";
import CategoryCard from "./CategoryCard";
import CategoryClass from "../data/Category";

const LIMIT: number = 3;

const Category = () => {
  const [limit, setLimit] = useState<number>(LIMIT);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const token: string = await getToken();
      const categories = await getRandomCategories(token);

      console.log(categories);

      setCategories(categories);
    };

    fetchCategories();
  }, []);

  return (
    <section className="categories">
      <div className="title">
        <h2 className="title__h2">Je suis ici pour rester les cocos</h2>
        <span className="title__secondTitle">Info supplementaire</span>
      </div>

      <div className="limit">{limit}</div>
      {categories &&
        categories.map((category: CategoryClass) => (
          <CategoryCard key={category.categoryId} {...category} />
        ))}
    </section>
  );
};

export default Category;
