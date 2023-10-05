import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png'
import Image from 'react-bootstrap/Image'
import './styles.css'
import { FiShoppingCart, FiUser } from "react-icons/fi";

export default function Header() {
    const isBasketExist = true;
    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
            <Container fluid>
                <Navbar.Brand href="#">
                    <Image src={logo} className="brand-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home
                        </Nav.Link>
                        <NavDropdown title="Shop" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action2">Chăm sóc da mặt</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Trang điểm</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Nước hoa</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Thực phẩm chức năng
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                TẤT CẢ SẢN PHẨM
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="about">
                            About
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
            <div className="icon-container">
                <FiShoppingCart className="shopping-cart" />
                {
                    isBasketExist ? <div className="red-dot"></div> : null
                }
            </div>
            <FiUser className="shopping-cart" />
        </Navbar>
    )
}