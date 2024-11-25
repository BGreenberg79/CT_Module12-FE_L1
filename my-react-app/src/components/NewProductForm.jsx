import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import useInventory from '../hooks/useInventory'

const NewProductForm = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    const productData = { 
        "title": title, 
        "price": price, 
        "description": description,
        "image": image,
        "category": category
    };

    const postInventory = useInventory('POST', productData)

    const handleSubmission = (event) => {
        event.preventDefault()
        console.log(productData)
        postInventory(productData);
    }

  return (
    <Container>
        <h3>New Product Form</h3>
        <Form className="border border-danger" onSubmit={handleSubmission}>

                <Form.Group>
                    <Form.Label>Title:</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Price:</Form.Label>
                    <Form.Control
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Image File:</Form.Label>
                    <Form.Control
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Category:</Form.Label>
                    <Form.Control
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </Form.Group>




                <Button className='shadow-sm m-1 p-1' variant="success" type="submit">Submit</Button>
            </Form>
    </Container>
  )
}

export default NewProductForm