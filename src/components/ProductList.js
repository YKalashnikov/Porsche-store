import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import { ProductConsumer} from '../contexApi'
import styled from 'styled-components';

 class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                <div className="container">
                <Title name="Tribute to" title="a dream" />

                <div className="row">
                <ProductConsumer>
                    {(value)=> {
               return value.products.map(product => {
                   return <Product key={product.id} product={product}/>
               })
                    }}
                </ProductConsumer>
                </div>
                </div>
                </div>
                <NavWrapper>
                <footer className="navbar-expand-sm bg-dark rounded da">© Porche California {new Date().getFullYear()}</footer>
                </NavWrapper>
               {/* <Product/> */}
            </React.Fragment>
        )
    }
}

export default ProductList;


const NavWrapper = styled.nav`
 background: var(--mainBlue);
 border-radius: 1rem;
 footer{
     color: var(--mainWhite)!important;
     font-size: 1rem;
     text-align:center;
     padding:0.5rem;

 }`
