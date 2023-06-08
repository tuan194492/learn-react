import React from "react";
import { useState, useEffect } from "react";
import DropDownList from "../../common/DropDownList";
import { Form, Row, Col, Button} from "react-bootstrap";
import ImagePreviewList from "../../common/ImagePreviewList";

const NewDetail = (props) => {
    
    let {readonly, id} = props;
    const [newData, setNewData] = useState({
        city: 'Ha noi',
        imageList: []
    });
    let [images, setImages] = useState([]);

    const handleSubmit = () => {
        console.log(newData)
    } 

    return (
        <div>
            <h2> Đăng tin mới </h2>

            <h3>Địa chỉ cho thuê</h3>
            <Row>
                <Col md="3">
                    <DropDownList label="Tỉnh/Thành phố" optionList={['Hà Nội', 'Vĩnh Phúc']} />
                </Col>
                <Col md="3">
                    <DropDownList label="Quận/Huyện" optionList={['Hà Nội', 'Vĩnh Phúc']} />
                </Col>
                <Col md="3">
                    <DropDownList label="Phường/Xã" optionList={['Hà Nội', 'Vĩnh Phúc']} />
                </Col>
                <Col md="3">
                    <DropDownList label="Đường/Phố" optionList={['Hà Nội', 'Vĩnh Phúc']} />
                </Col>
            </Row>
            <Row>
                <Col md="3">
                    <Form.Label htmlFor="so-nha">Số nhà</Form.Label>
                    <Form.Control
                        type="text"
                        id="so-nha"
                    />
                </Col>
            </Row>

            <h3>Thông tin mô tả</h3>
            <Row>
                <Col md="6" >
                    <Form.Label>Loại chuyên mục</Form.Label>
                    <DropDownList label="Chọn loại chuyên mục" optionList={['Phòng trọ', 'Nhà cho thuê', 'Tìm người ở ghép']} />
                </Col>
                <Col md="12">
                    <Form.Label>Tiêu đề</Form.Label>
                    <Form.Control
                        type="text"
                    />
                </Col>
                <Col md="12">
                    <Form.Label>Nội dung mô tả</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Col>
                <Col md="6">
                    <Form.Label>Thông tin liên hệ</Form.Label>
                    <Form.Control
                        type="text"
                        disabled
                        value="Nguyễn Quốc Tuấn"
                    />
                </Col>
                <Col md="6"></Col>
                <Col md="6">
                    <Form.Label>Điện thoại</Form.Label>
                    <Form.Control
                        type="text"
                        disabled
                        value="0915124206"
                    />
                </Col>
                <Col md="6"></Col>
                <Col md="6">
                    <Form.Label>Giá cho thuê</Form.Label>
                    <Form.Control
                        type="number"
                    />
                </Col>
                <Col md="6"></Col>
                <Col md="6">
                    <Form.Label>Diện tích</Form.Label>
                    <Form.Control
                        type="number"
                    />
                </Col>
                <Col md="6"></Col>
                <Col md="6">
                    <Form.Label>Đối tượng cho thuê</Form.Label>
                    <DropDownList label="Đối tượng cho thuê" optionList={['Nam', 'Nữ']} />
                </Col>
                <Col md="6"></Col>

                <Col md="9">
                    <Form.Label>Hình ảnh</Form.Label>
                    <ImagePreviewList parentObj = {newData} setParentObj={setNewData}/>
                </Col>

            </Row>
            <Row className="mt-3">
                <Col md="5"></Col>
                <Col md="3">
                    <Button onClick={handleSubmit}>Tiếp tục</Button>
                </Col>
                
            </Row>
        </div>
    )
}

export default NewDetail;