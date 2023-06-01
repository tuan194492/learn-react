import React from "react";
import { useState, useEffect } from "react";
import authService from "../../../services/AuthServices";
import newService from "../../../services/NewService";
import NewSummury from "./NewSummary";


const NewManagerPage = () => {
    const [newList, setNewList] = useState(newService.getNewsByUserId(authService.getCurrentUser().id));  
    console.log(newList)  

    return (
        <NewSummury newList={newList} />
    )
}

export default NewManagerPage;