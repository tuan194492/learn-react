import React, { useEffect, useState } from "react";
import ImageSlider from '../ImageSlider';
import { Container } from "react-bootstrap";
import NewListMiniSize from "./NewListMiniSize";
import newService from "../../../services/NewService";
const NewDetailForAll = (props) => {
    let newData = {id: 1}
    const [relatedNewList, setRelatedNewList] = useState(newService.getRelatedNews(newData.id));
    

    const images = [
        'https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVza3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVza3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1563889362352-b0492c224f62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVza3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
      ];
    
    return (
        <div className="container">
            <div className="row" >
                <div className="col-9">
                    <ImageSlider images={images} />
                </div>
                <div className="col-3">
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src="https://phongtro123.com/images/default-user.png" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Dummy user</h5>
                        <a href="#" class="btn btn-primary"><img width="20" height="20" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1"/>0912312312</a>
                    </div>
                    </div>

                </div>
            </div>

            <div className="row mt-5">
                <div className="col-9">
                    <p class="text-danger h3">PHÒNG TRỌ ĐỐI DIỆN KS 5 SAO TÂN SƠN NHẤT MỚI XÂY RẤT ĐẸP - GẦN CÔNG VIÊN HOÀNG VĂN THỤ</p>
                    <p><img width="25" height="25" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1"/>Địa chỉ: 205/10A-B Đường Hoàng Văn Thụ, Phường 8, Quận Phú Nhuận, Hồ Chí Minh</p>
                    
                    <div className="row">
                        <span className="col-2">
                            <p class="text-success"><img width="25" height="25" src="https://img.icons8.com/ios/50/price-tag-euro.png" alt="price-tag-euro"/>5 triệu/tháng </p>
                        </span>
                        <span className="col-2">
                            <p><img width="25" height="25" src="https://img.icons8.com/ios/50/texas.png" alt="texas" /><span className="ml-6">25m2</span></p>
                        </span>
                    </div>

                    <div>
                        <h4>Thông tin mô tả</h4>
                        <p>- Phòng đẹp nằm ngay trung tâm quận Phú Nhuận (xem hình thật). View trước là đối diện Khách Sạn 3* Tân Sơn Nhất, View sau là đường Nguyễn Văn Trỗi.</p>
                        <p>+ Phòng mới rất đẹp được ốp lát gạch, tất cả các phòng đều có CỬA SỔ, CÓ BAN CÔNG, MÁY LẠNH, Rèm cửa. Rất thoáng mát.</p>
                        <p>- Bỏ xe dưới tầng hầm, có bảo vệ trong coi, Sân thượng phơi quần áo có mái che, có 02 bộ ghế đá ngồi thư giản.</p>
                        <p>- Trong nhà có Thang máy đi lại, Có Camera an ninh quan sát.</p>
                        <p>- Bảo vệ trong coi 24/24 giúp Bạn có cảm giác an toàn, khóa vân tay giờ giấc tự do.</p>
                        <p>- Toilet riêng, đặc biệt có BẾP nấu ăn.</p>
                        <p>- Internet cáp quang lắp đặt trong phòng rất mạnh. Cáp Tivi.</p>
                        <p>- Diện tích: 25 - 40 m2.</p>
                        <p>+ Giá: 5tr/tháng.</p>
                        <p>+ Địa chỉ: 205/10A Hoàng Văn Thụ, P.8, Phú Nhuận, Tp. Hồ Chí Minh.</p>
                    </div>
                    <div>
                        <h3>Đặc điểm tin Đăng</h3>
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span >Mã tin</span>
                                <span style={{float: "right"}}>#22312</span>
                            </li>
                            <li class="list-group-item list-group-item-secondary">
                                <span >Khu vực</span>
                                <span style={{float: "right"}}>Cho thuê phòng trọ Hồ Chí Minh</span>
                            </li>
                            <li class="list-group-item">
                                <span >Loại tin rao:</span>
                                <span style={{float: "right"}}>Phòng trọ, nhà trọ</span>
                            </li>
                            <li class="list-group-item list-group-item-secondary">
                                <span >Gói tin:</span>
                                <span style={{float: "right"}}>Tin VIP nổi bật</span>
                            </li>
                            <li class="list-group-item">
                                <span >Ngày đăng:</span>
                                <span style={{float: "right"}}>Thứ 5, 14:33 08/06/2023</span>
                            </li>
                            <li class="list-group-item list-group-item-secondary">
                                <span >Ngày hết hạn:</span>
                                <span style={{float: "right"}}>Thứ 6, 14:33 23/06/2023</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-3">
                    <p className="h2">Tin liên quan </p>
                    <NewListMiniSize newList={relatedNewList} />
                    
                </div>

            </div>
        </div>
    )
}

export default NewDetailForAll;