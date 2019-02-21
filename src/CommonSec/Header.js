import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    //UncontrolledDropdown,
    //DropdownToggle,
    //DropdownMenu,
    //DropdownItem,
    Container } from 'reactstrap';

export default class HeaderSec extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render(){
        return(
            <div className="custom-navbar">
                <Navbar color="primary" light expand="md">
                <Container>
                    <NavbarBrand href="/">Rohit Azad Malik 
                    (रोहित आजाद मलिक)
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <NavbarToggler onClick={this.toggle} />
                </Container>
                </Navbar>
            </div>
        );
    }
}
