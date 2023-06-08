import React, { useState } from "react";
import {Container, Form, Col, Row, Button, Table} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import authService from "../../../services/AuthServices";
import newService from "../../../services/NewService";


const NewSummury = (props) => {
    const navigate = useNavigate();
    let {newList, setNewList} = props;

    const addNew = (e) => {
        navigate("/manage-new/create");
    } 

    const goToEditNew = (e) => {
        navigate(`/manage-new/${e.target.id}`);
    }

    const deleteNew = (e) => {
        newService.deleteNew(e.target.id);
        const updatedList = newList.filter(item => item.id !== e.target.id)
        setNewList(updatedList)
    }

    return ( 
        <div>
            <h2>Danh sách bản tin <Button onClick={addNew} >Thêm bản tin </Button> </h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            Mã tin
                        </th>
                        <th>
                            Ảnh đại diện
                        </th>
                        <th>
                            Tiêu đề
                        </th>
                        <th>
                            Giá
                        </th>
                        <th>
                            Ngày bắt đầu
                        </th>
                        <th>
                            Ngày hết hạn
                        </th>
                        <th>
                            Trạng thái
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newList.length > 0 ? 
                        newList.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>
                                        {item.id}
                                    </td>
                                    <td>
                                        <image src="item.image" />
                                    </td>
                                    <td>
                                        {item.title}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        {item.date_begin}
                                    </td>
                                    <td>
                                        {item.date_end}
                                    </td>
                                    <td>
                                        {item.status}
                                    </td>
                                    <td>
                                        <Button variant="outline-info" onClick={goToEditNew}>Edit</Button>
                                        <Button variant="outline-danger" onClick={deleteNew}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        } 
                        ) : (
                            <div>
                                <h6>Hiện tại không có dữ liệu. Ấn vào <a href="#" onClick={addNew}>đây</a> để thêm</h6>
                            </div>
                        )
                    }
                </tbody>
            </Table>
            
        </div>
    )
}

export default NewSummury;