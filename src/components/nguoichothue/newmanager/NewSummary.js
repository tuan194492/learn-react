import React, { useState } from "react";
import New from "../../common/new/New";


const NewSummury = (props) => {
    let {newList} = props;

    return ( 
        <div>
            Hello
            {newList.map(item => <New data={item}/>)}
        </div>
    )
}

export default NewSummury;