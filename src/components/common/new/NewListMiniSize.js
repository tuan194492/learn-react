import React, { useEffect } from "react";
import NewByRowMini from "./NewByRowMini";

const NewListMiniSize = (props) => {
    let {newList} = props;
    useEffect(() => {
        console.log("Related new");
        console.log(newList);
    }, [])
    return (
        <div style={{marginTop: '10px'}}>
          {
            newList.map((item, index) => {
              return <NewByRowMini key={index} new={item} />
            })
          }
        </div>
    )

}

export default NewListMiniSize;