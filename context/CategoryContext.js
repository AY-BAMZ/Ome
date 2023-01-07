import { createContext, useContext, useState } from "react";

export const CategoryContext = createContext();

const CategoryProvider = (props) => {
  const [category, setCategory] = useState("all");
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {props.children}
    </CategoryContext.Provider>
  );
};
export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  //   if (!context) throw new Error("useCategoryContext must be used in CategoryProvider");

  return context;
};

export default CategoryProvider;
