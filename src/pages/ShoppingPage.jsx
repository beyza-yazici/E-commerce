// pages/ShoppingPage.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'lucide-react';
import { fetchProducts } from '../store/actions/productActions';

const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-[400px]">
        <Loader className="w-8 h-8 animate-spin text-blue-500" />
    </div>
);

const ShoppingPage = () => {
    const dispatch = useDispatch();
    const { 
        productList, 
        total, 
        fetchState,
        limit,
        offset 
    } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (fetchState === 'FETCHING') return <LoadingSpinner />;
    if (fetchState === 'ERROR') {
        return <div className="text-red-500 text-center p-4">Error loading products</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Products</h1>
                <span className="text-gray-600">
                    Showing {offset + 1}-{Math.min(offset + limit, total)} of {total} products
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {productList.map((product) => (
                    <div 
                        key={product.id} 
                        className="flex flex-col border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="relative pt-[100%]">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                            <p className="text-gray-600 text-sm mb-2 flex-grow">
                                {product.description}
                            </p>
                            
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-lg font-bold">
                                    ${product.price.toFixed(2)}
                                </span>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShoppingPage;