import React from "react";
import Header from '../components/header'
import Slider from "../components/slider"
import Skincare from "../components/skincare";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
    return (
    <>
        <Header/>
        <Slider/>
        <Skincare/>
    </>
    )
}