import React from "react";
import store from '../assets/store.jpg'
import './styles.css'
export default function Login() {
    return (
        <section class="login">
            <div class="login_box">
                <div class="left">
                    <div class="top_link"><a href="">
                        <img src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download" alt="" />Trang chủ</a></div>
                    <div class="contact">
                        <form action="">
                            <h3>Đăng nhập</h3>
                            <input type="text" placeholder="Tài khoản" />
                            <input type="text" placeholder="Mật khẩu"/>
                            <button class="submit">ĐĂNG NHẬP</button>
                        </form>
                    </div>
                </div>
                <div class="right">
                    <img src={store} alt="" className="image"/>
                    <div class="right-text">
                        <h2>Pun Cosmetics</h2>
                        <h5>Welcome!</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}