import React from "react";
import { useState, useEffect } from "react";
import authService from "../../../services/AuthServices";
import newService from "../../../services/NewService";
import NewSummury from "./NewSummary";
import NewDetail from "./NewDetail"

const NewManagerPage = () => {
    const [newList, setNewList] = useState(newService.getNewsByUserId(authService.getCurrentUser().id));  
    
    console.log(newList)  

    return (
        <div>
            {
                newList ? 
                ( 
                    <NewSummury newList={newList} />
                )
                :
                (<NewDetail />)
            }
        </div>
    )
}

export default NewManagerPage;