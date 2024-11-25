import { useState, useEffect } from "react";
import axios from 'axios';

const useInventory = (method, productId = null) => {

    const [inventory, setInventory] = useState([]);


    
            useEffect(() => {
                if (method === 'GET') {
                const fetchInventory = async () => {
                    try{
                        const response = await axios.get('https://fakestoreapi.com/products');
                        console.log(response);
                        setInventory(response.data);
                    } catch (error) {
                        console.log('Error fetching inventory', error)
                    }
                }

                fetchInventory();}
            }, [method]);
            
    switch (method) {
        case 'GET':
            return inventory;
    

    case 'POST':{
            const submitProduct = async (productData) => {
            
                try {

                        const response = await axios.post('https://fakestoreapi.com/products', productData);
                        setInventory((prevList) => [...prevList, response.data]);
                } catch (error) {
                    console.error("Error submitting product:", error)
                };
            }
            return submitProduct;
        }
            

    case 'DELETE':{
        const deleteProduct = async (productId) => {
            try {
                const response= await axios.delete(`https://fakestoreapi.com/products/${productId}`);
                setInventory((prevList) => prevList.filter((product) => product.id !== productId));
                console.log(response)
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        };
        return deleteProduct;
    }
    default:
        return null;
    };
};

    export default useInventory;