import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer} from './Button'
import logo from "../../src/logo.png"

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5 rounded" >
<Link to = "/"/> < img src={logo} alt="store"  style={{ width: "3rem", }}  className="navbar-brand"/>
  <ul className = "navbar-nav align-items-center">
  <li className="nav-item ml-5">
  <Link to="/" className="nav-link">PORSCHE</Link>
  </li>
  </ul>
  <Link to="/cart" className="ml-auto">
  <ButtonContainer>
      <span className="mr-2">
      <i className="fas fa-car"></i>
      </span>
    my garage
      </ButtonContainer>
  </Link>
                </NavWrapper>
            </div>
        )
    }
}

export default  NavBar;


const NavWrapper = styled.nav`
 background: var(--mainBlue);
 .nav-link{
     color: var(--mainWhite)!important;
     font-size: 1.3rem;
     text-transform: capitalize ;
 }`