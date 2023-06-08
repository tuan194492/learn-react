import React, { useEffect, useState } from "react";
import {Container, Form, Col, Row, Button} from 'react-bootstrap';
import newService from "../../../services/NewService";
import NewByRow from "./NewByRow";
import NewListFullSize from "./NewListFullSize";

const NewSummary = (props) => {
  
  let {data} = props;

  // const [newList, setNewList] = useState(newService.getAllNews());
  let newList = [
    'a', 'b', 'c'
  ]

  let filterButtonStyle = {
    border: 'none',
    marginLeft: '10px'
  }

  let filterButtonBar = {
    marginBottom: '10px'
  }
  return (
    <div>

      <div className="new-container"> 
        <h2>Danh sách bản tin</h2>

        <span >
        
          <h6 style={{display: "inline"}}>Sắp xếp theo</h6>
          <button style={filterButtonStyle}>Mặc định</button>
          <button style={filterButtonStyle}>Mới nhất</button>
          <button style={filterButtonStyle}>Có video</button>
        </span>
        
        <NewListFullSize newList={newList} />
        
      </div>
    </div>
  );
};

export default NewSummary;