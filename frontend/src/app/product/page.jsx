import AddProduct from '@/Components/AddProduct/AddProduct';
import ProtectedRoute from '@/Components/ProtectedRoute/ProtectedRoute';
import React from 'react';

const Product = () => {
    return (
        <ProtectedRoute>
            <AddProduct />
        </ProtectedRoute>
    );
};

export default Product;