import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { fetchProducts, setCategoryId, setFilter, setSort, setOffset } from '../store/actions/productActions';
import LogoBand from '../components/Logo';

const ITEMS_PER_PAGE = 25; // limit değeri

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

const ShoppingPage = () => {
    // eslint-disable-next-line no-unused-vars
    const { gender, categoryName, categoryId } = useParams();
    // eslint-disable-next-line no-unused-vars
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
        // Smooth scroll
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        const newOffset = selected * ITEMS_PER_PAGE;
        dispatch(setOffset(newOffset));
        // Sayfanın üstüne scroll
        window.scrollTo(0, 0);
    };

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
        dispatch(setOffset(0)); // Filtreleme yapıldığında sayfa 1'e dön
    };

    const handleSortChange = (e) => {
        dispatch(setSort(e.target.value));
        dispatch(setOffset(0)); // Sıralama yapıldığında sayfa 1'e dön
    };

    // Loading state with skeletons
    if (fetchState === 'FETCHING') {
        return (
            <div className="container mx-auto px-4 md:px-4">
                <div className="flex flex-col md:flex-row items-center justify-between py-4 text-center md:text-left">
                    <h1 className="text-2xl font-bold mb-2 md:mb-0">Shop</h1>
                    <div className="flex items-center space-x-2">
                        <Link to="/" className="text-gray-600">Home</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-400">Shop</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {Array(ITEMS_PER_PAGE).fill(0).map((_, idx) => (
                        <ProductSkeleton key={idx} />
                    ))}
                </div>
            </div>
        );
    }

    if (fetchState === 'ERROR') {
        return <div className="text-red-500 text-center p-4">Error loading products</div>;
    }

    return (
        <div className="container mx-auto px-4 md:px-4">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between py-4 text-center md:text-left">
                <h1 className="text-2xl font-bold mb-2 md:mb-0">Shop</h1>
                <div className="flex items-center space-x-2">
                    <Link to="/" className="text-gray-600">Home</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-400">Shop</span>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {/* ... categories mapping ... */}
            </div>

            {/* Products Section */}
            <div className="mt-12">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                    <p className="text-gray-600 w-full md:w-1/4 text-center md:text-left">
                        Showing {offset + 1}-{Math.min(offset + limit, total)} of {total} products
                    </p>

                    {/* Filter and Sort Controls */}
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

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {productList.map((product) => (
                        <div key={product.id} className="flex flex-col items-center md:items-stretch">
                            <div className="relative group w-full">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full aspect-[3/4] object-cover z-10"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 z-20" />
                            </div>
                            <div className="mt-4 text-center w-full">
                                <h3 className="font-medium">{product.name}</h3>
                                <p className="text-sm text-gray-600">{product.description}</p>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                    <span className="text-gray-900">${product.price.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
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

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                    <div className="flex gap-1">
                        {/* ... pagination ... */}
                
                        </div>
                        </div>  
        </div>
        </div>
    );
};

export default ShoppingPage;