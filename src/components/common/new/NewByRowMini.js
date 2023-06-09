import React from "react";
import { useNavigate } from "react-router-dom";

const NewByRowMini = (props) => {
    let {newData} = props;
    let navigate = useNavigate();
    return (
        <div class="card mb-3" style={{width: '100%', height: 'auto'}}>
            <div class="row g-0">
                <div class="col-md-4">
                <img 
                    src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/04/04/z4237382852854-ed72464cadbd4c61b8ebe2acb970694e_1680602688.jpg" 
                    class="img-fluid rounded-start" alt="..." style={{maxWidth: '80%', height: 'auto'}}
                    onClick={ e => {
                        navigate('/new-view/detail')
                    }}
                />
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title"
                        onClick={ e => {
                            navigate('/new-view/detail')
                        }}>
                        PHÒNG TRỌ ĐỐI DIỆN KS 5 SAO TÂN SƠN NHẤT MỚI XÂY RẤT ĐẸP - GẦN CÔNG VIÊN…</h5>
                    <div>
                        <span style={{color: "green"}}>5 triệu/tháng </span>    
                    </div>
                    <p class="card-text"><small class="text-body-secondary">Hôm nay</small></p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NewByRowMini;