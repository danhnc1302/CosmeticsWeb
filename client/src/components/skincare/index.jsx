import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardItem from "../cardItem";
import './styles.css'


export default function Skincare() {
    return (
        <div className="background-grey">
            <h2 className="category">Chăm sóc da mặt</h2>

            <Row className="spacing">
                <Col><CardItem/></Col>
                <Col><CardItem/></Col>
                <Col><CardItem/></Col>
                <Col><CardItem/></Col>
            </Row>
            <Row>
                <Col><CardItem/></Col>
                <Col><CardItem/></Col>
                <Col><CardItem/></Col>
                <Col><CardItem/></Col>
            </Row>
        </div>
    )
}