import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {options} from '../config'
import {TreeGraph} from "./TreeGraph";
import Footer from './footer';


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";

function App() {

    return (

        <React.Fragment>
            <Navbar bg={"dark"} variant={"dark"}>
                <NavbarBrand>
                    Binary Tree Visualizer
                </NavbarBrand>
                
            </Navbar>

            <Container fluid className={"h-100"}>
                <Row className={"mt-4 mb-2"}>
                    <TreeGraph options={options}/>
                </Row>
               
            </Container>

            <Footer />
        </React.Fragment>
    );
}

export default App;
