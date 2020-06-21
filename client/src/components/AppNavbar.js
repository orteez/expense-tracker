import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";
import Routes from '../Routes';

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar color="light" light expand="md">
                <LinkContainer to="/">
                    <NavbarBrand>Expense Tracker</NavbarBrand>
                </LinkContainer>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <LinkContainer to="/">
                            <NavItem>
                                Home
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <LinkContainer to="/signup">
                            <NavItem>
                                Sign Up
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Collapse>
            </Navbar>
            <Routes />
        </>
    )
}

export default withRouter(AppNavbar);