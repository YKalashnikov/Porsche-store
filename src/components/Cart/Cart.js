import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "/Users/yuriikalashnikov/Desktop/online store/store/src/components/Cart/CartColumn.js";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "/Users/yuriikalashnikov/Desktop/online store/store/src/contexApi.js";
import EmptyCart from "./EmptyCart";

export default class Store extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="garage" />
                  <CartColumns />
                  <CartList value={value} />
               	<CartTotals value={value} history={this.props.history} /> 
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}