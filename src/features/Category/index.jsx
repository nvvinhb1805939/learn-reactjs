import categoryApi from 'api/categoryApi';
import React, { useEffect, useState } from 'react';
import CategoryItem from './pages/CategoryItem';

function CategoryFeature() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fecthCategoryList = async () => {
      const data = await categoryApi.getAll();
      const categoryList = [...category, ...data];
      setCategory(categoryList);
    };
    fecthCategoryList();
  }, []);
  return (
    <div>
      <ul>
        {category.map(categoryItem => (
          <CategoryItem key={categoryItem.id} name={categoryItem.name} />
        ))}
      </ul>
    </div>
  );
}

export default CategoryFeature;
