import React from "react";
import { useState } from "react";
import {Col, Form, Row, Button} from 'react-bootstrap';
import '../../App.css'
const ImagePreviewList = (props) => {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setSelectedImages([...selectedImages, ...files]);
      };
    
      const handleImageRemove = (index) => {
        const updatedImages = [...selectedImages];
        updatedImages.splice(index, 1);
        setSelectedImages(updatedImages);
      };
    return (
    <div>
      <Row>
        <Col md={12}>
          <Form.Group>
            <Form.Label>Upload Images</Form.Label>
            <Form.Control type="file" multiple onChange={handleImageUpload} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="uploaded-images-container">
          {selectedImages.map((image, index) => (
            <div key={index} className="uploaded-image">
                <img src={URL.createObjectURL(image)} alt={`uploaded-${index}`} />
                <Button variant="danger" size="sm" className="delete-button" onClick={() => handleImageRemove(index)}>Delete</Button>
            </div>
          ))}
        </Col>
      </Row>
    </div> 
  );
}

export default ImagePreviewList;