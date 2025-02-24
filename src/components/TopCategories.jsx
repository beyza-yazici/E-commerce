// components/TopCategories.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../store/actions/categoriesActions';


const TopCategories = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {topCategories.map((category) => (
        <Link
          key={category.id}
          to={`/shop/${category.gender}/${category.name.toLowerCase()}/${category.id}`}
          className="group relative overflow-hidden rounded-lg"
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-48 object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
            <h3 className="text-center font-semibold">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopCategories;