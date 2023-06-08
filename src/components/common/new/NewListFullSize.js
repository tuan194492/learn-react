import React from "react";
import NewByRow from "./NewByRow";


const NewListFullSize = (props) => {

    let {newList} = props;

    return (
        <div style={{marginTop: '10px'}}>
          {
            newList.map((item, index) => {
              return <NewByRow key={index} new={item} />
            })
          }
        </div>
    )

}

export default NewListFullSize;