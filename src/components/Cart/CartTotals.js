import React, { Component } from "react";
import PayPalButton from "./PayPalButton";
import { Link } from "react-router-dom";
import accounting from 'accounting';

export default class CartTotals extends Component {
  render() {
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      cart,
      clearCart
    } = this.props.value;
    const { history } = this.props;
    const emptyCart = cart.length === 0 ? true : false;
    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear garage
                  </button>
                </Link>
                <h5>
                  <span className="text-title"> subtotal :</span>{" "}
                  <strong> {accounting.formatMoney(cartSubTotal)} </strong>
                </h5>
                <h5>
                  <span className="text-title"> tax <span style={{fontSize:"1rem"}}>(7.5%)</span> :</span>{" "}
                  <strong> {accounting.formatMoney((cartTax))} </strong>
                </h5>
                <h5>
                  <span className="text-title"> total :</span>{" "}
                  <strong> {accounting.formatMoney((cartTotal))} </strong>
                </h5>
                <PayPalButton
                  totalAmount={cartTotal}
                  clearCart={clearCart}
                  history={history}
                />
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}