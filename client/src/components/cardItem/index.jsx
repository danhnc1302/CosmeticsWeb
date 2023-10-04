import React from "react";
import product1 from '../../assets/sp1.jpg'
import './styles.css'
export default function CardItem() {
    return (
        <div className="card-container">
            <img src={product1} alt="sp1" className="product-image"/>
            <div className="row-name">
                <p className="name">Jackket</p>
                <p className="price">60.90 VND</p>
            </div>
            <p className="product-description">crafted jackets, from iconic classics to modern essentials</p>
            <div className="add-basket">
                <h6>Thêm vào giỏ hàng</h6>
            </div>
        </div>
    )
}