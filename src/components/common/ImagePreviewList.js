import React from "react";
import { useState } from "react";
import {Col, Form, Row, Button} from 'react-bootstrap';
import '../../App.css'
const ImagePreviewList = (props) => {
    let {parentObj, setParentObj} = props;
    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        let imageList = [...parentObj.imageList];
        imageList = [...imageList, ...files];
        setParentObj({...parentObj, imageList: imageList})
        
      };
    
      const handleImageRemove = (index) => {
        let imageList = [...parentObj.imageList];
        const updatedImages = [...imageList];
        updatedImages.splice(index, 1);
        setParentObj({...parentObj, imageList: updatedImages})
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
          {parentObj.imageList.map((image, index) => (
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