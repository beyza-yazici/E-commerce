import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { fetchProducts, setCategoryId, setFilter, setSort, setOffset } from '../store/actions/productActions';
import LogoBand from '../components/Logo';
import PropTypes from 'prop-types';
import ShopProductCard from '../components/ShopProductCard';

const ITEMS_PER_PAGE = 25;

// Skeleton loader component
const ProductSkeleton = () => (
    <div className="flex flex-col items-center md:items-stretch animate-pulse">
        <div className="relative group w-full">
            <div className="w-full aspect-[3/4] bg-gray-200 rounded" />
        </div>
        <div className="mt-4 text-center w-full">
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
        </div>
    </div>
);

// Category Card Component
const CategoryCard = ({ image, title, itemCount, bgColor, onClick }) => (
    <div 
        className={`relative group cursor-pointer overflow-hidden ${bgColor}`}
        onClick={onClick}
        role="button"
        tabIndex={0}
    >
        <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
            draggable="false"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p>{itemCount}</p>
        </div>
    </div>
);

CategoryCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    itemCount: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

const ShoppingPage = () => {
    const { categoryId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    
    const { 
        productList, 
        total, 
        fetchState,
        limit = ITEMS_PER_PAGE,
        offset,
        sort,
        filter 
    } = useSelector(state => state.products);

    const categories = [
        {
            image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg",
            title: "CLOTHS",
            itemCount: "5 Items",
            bgColor: "bg-gray-400",
            gender: "women",
            id: 1
        },
        {
            image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
            title: "CLOTHS",
            itemCount: "5 Items",
            bgColor: "bg-teal-500",
            gender: "men",
            id: 2
        },
        {
            image: "https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg",
            title: "CLOTHS",
            itemCount: "5 Items",
            bgColor: "bg-rose-300",
            gender: "women",
            id: 3
        },
        {
            image: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg",
            title: "CLOTHS",
            itemCount: "5 Items",
            bgColor: "bg-purple-300",
            gender: "men",
            id: 4
        },
        {
            image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
            title: "CLOTHS",
            itemCount: "5 Items",
            bgColor: "bg-pink-400",
            gender: "women",
            id: 5
        }
    ];

    const pageCount = Math.ceil(total / limit);
    const currentPage = Math.floor(offset / limit);

    useEffect(() => {
        if (categoryId) {
            dispatch(setCategoryId(categoryId));
        }
    }, [categoryId, dispatch]);

    useEffect(() => {
        dispatch(fetchProducts({ 
            categoryId, 
            sort, 
            filter,
            limit: ITEMS_PER_PAGE,
            offset 
        }));
    }, [dispatch, categoryId, sort, filter, offset]);

    const handlePageChange = ({ selected }) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        const newOffset = selected * ITEMS_PER_PAGE;
        dispatch(setOffset(newOffset));
    };

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
        dispatch(setOffset(0));
    };

    const handleSortChange = (e) => {
        dispatch(setSort(e.target.value));
        dispatch(setOffset(0));
    };

    const handleCategoryClick = (category) => {
        history.push(`/shop/${category.gender || 'all'}/${category.title.toLowerCase()}/${category.id || 1}`);
    };

    const renderContent = () => {
        return (
            <div className="mt-12">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                    <p className="text-gray-600 w-full md:w-1/4 text-center md:text-left">
                        Showing {offset + 1}-{Math.min(offset + limit, total)} of {total} products
                    </p>

                    <div className="flex items-center justify-center gap-4 w-full md:w-2/4">
                        <input
                            type="text"
                            placeholder="Filter products..."
                            className="border p-2 rounded w-full md:w-auto"
                            value={filter}
                            onChange={handleFilterChange}
                        />
                        
                        <div className="relative">
                            <select 
                                className="w-full md:w-auto appearance-none bg-white border rounded-md px-4 py-2 pr-8 cursor-pointer focus:outline-none focus:border-blue-500"
                                value={sort}
                                onChange={handleSortChange}
                            >
                                <option value="">Sort by...</option>
                                <option value="price:asc">Price: Low to High</option>
                                <option value="price:desc">Price: High to Low</option>
                                <option value="rating:asc">Rating: Low to High</option>
                                <option value="rating:desc">Rating: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {fetchState === 'FETCHING' ? (
                        Array(ITEMS_PER_PAGE).fill(0).map((_, idx) => (
                            <ProductSkeleton key={idx} />
                        ))
                    ) : (
                        productList.map((product) => (
                            <div key={product.id} onClick={(e) => e.stopPropagation()}>
                                <ShopProductCard product={product} />
                            </div>
                        ))
                    )}
                </div>

                {pageCount > 1 && (
                    <div className="flex justify-center mt-8">
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            forcePage={currentPage}
                            containerClassName={"flex gap-2"}
                            pageClassName={"border rounded px-3 py-1 hover:bg-gray-100"}
                            previousClassName={"border rounded px-3 py-1 hover:bg-gray-100"}
                            nextClassName={"border rounded px-3 py-1 hover:bg-gray-100"}
                            activeClassName={"bg-blue-500 text-white"}
                            disabledClassName={"opacity-50 cursor-not-allowed"}
                        />
                    </div>
                )}

                <LogoBand />
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 md:px-4">
            <div className="flex flex-col md:flex-row items-center justify-between py-4 text-center md:text-left">
                <h1 className="text-2xl font-bold mb-2 md:mb-0">Shop</h1>
                <div className="flex items-center space-x-2">
                    <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-400">Shop</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                {categories.map((category, index) => (
                    <CategoryCard
                        key={index}
                        image={category.image}
                        title={category.title}
                        itemCount={category.itemCount}
                        bgColor={category.bgColor}
                        onClick={(e) => {
                            e.preventDefault();
                            handleCategoryClick(category);
                        }}
                    />
                ))}
            </div>

            {fetchState === 'ERROR' ? (
                <div className="text-red-500 text-center p-4">Error loading products</div>
            ) : (
                renderContent()
            )}
        </div>
    );
};

export default ShoppingPage;