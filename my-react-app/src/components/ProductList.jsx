import React from 'react'
import useInventory from '../hooks/useInventory'
import { Container, ListGroup, Button } from 'react-bootstrap'

const ProductList = () => {

    const inventoryList = useInventory('GET', null)
    const deleteProduct = useInventory('DELETE')

return (
    <Container>
        <h3>Product List</h3>
        <ListGroup>
                    {inventoryList.map((product) => (
                        <ListGroup.Item variant='info' key={product.id}>
                            Product ID: {product.id}, Title: {product.title}, Category: {product.category}, Price: {product.price}, Description: {product.description}
                            <Button variant='danger' className='shadow-sm m-1 p-1' onClick={() => deleteProduct(product.id)}>
                                Delete
                            </Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>

    </Container>
)
}

export default ProductList