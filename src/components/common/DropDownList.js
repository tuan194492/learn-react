import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
const DropDownList = (props) => {
    let {optionList, label} = props;
    return (
        <FloatingLabel controlId="floatingSelect" label={label}>
        <Form.Select aria-label="Floating label select example">
            {
                optionList.map(
                    data => 
                    {
                        return  (<option>{data}</option>) 
                    }
                )
            }
            
        </Form.Select>
        </FloatingLabel>
    )
}

export default DropDownList;