import React from "react";
import { useState } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
const DropDownList = (props) => {
    let {optionList, label, parentObj, valueName} = props;
    const [selectedOption, setSelectedOption] = useState('');
    return (
        <FloatingLabel controlId="floatingSelect" label={label}>
        <Form.Select aria-label="Floating label select example"  onChange={e => {
            e.preventDefault();
            setSelectedOption(e.target.value)
            parentObj[valueName] = e.target.value;
        }}>
            {
                optionList.map(
                    data => 
                    {
                        return  (<option value={data} >{data}</option>) 
                    }
                )
            }
            
        </Form.Select>
        </FloatingLabel>
    )
}

export default DropDownList;