import React, { useState } from "react";
import "./SingleOrder.css";
import NavBar from "../../components/NavBar/NavBar";
import NavSm from "../../components/NavSm/NavSm";
import { useLocation } from "react-router";
import order from "../../components/Orders";
import Footer from "../../components/Footer/Footer";
const SingleOrder = () => {
  const location = useLocation();
  const orderID = location.state || {};
  const { id } = orderID;
  console.log(id);
  const OrderFilter = order.find((item) => id === item.id);
  console.log(OrderFilter);
  const [orderStatus, setOrderStatus] = useState(OrderFilter.orderStatus);
  const total = OrderFilter.products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div>
      <NavBar />
      <NavSm />
      <div className="home-container">
        <div className="single-order-body">
          <div className="single-order-address">
            <div className="single-item">
              <div className="single-order-head">Order Id</div>
              <div className="single-order-content-text">
                Order_{OrderFilter.id}
              </div>
            </div>
            <div className="single-item">
              <div className="single-order-head">Order Status</div>
              <div
                className={`single-order-content-text ${
                  orderStatus === "pending"
                    ? "text-warning"
                    : orderStatus === "shipped"
                    ? "text-success"
                    : "text-danger"
                }`}
              >
                {orderStatus}
              </div>
            </div>
            <div className="single-item">
              <div className="single-order-head">Delivery Address</div>
              <div className="single-order-content-text">
                {OrderFilter.address.street}
              </div>
            </div>
            <div className="single-item">
              <div className="single-order-head">State</div>
              <div className="single-order-content-text">
                {" "}
                {OrderFilter.address.state}
              </div>
            </div>
            <div className="single-item">
              <div className="single-order-head">City</div>
              <div className="single-order-content-text">
                {OrderFilter.address.city}
              </div>
            </div>
            <div className="single-item">
              <div className="single-order-head">Payment Details</div>
              <div className="single-order-content-text">
                Items total:₦{total}
              </div>
              <div className="single-order-content-text">
                Shipping Fee:₦{OrderFilter.shipping}
              </div>
              <div className="single-order-content-text">
                total:{OrderFilter.shipping + total}
              </div>
            </div>
            <div className="single-item">
              <div className="single-order-head">Payment Method</div>
              <div className="single-order-content-text">Cash Payment</div>
            </div>
          </div>
          <div className="single-order-content">
            {OrderFilter.products.map((item) => (
              <div className="single-item-order">
                <div className="single-image">
                  <img
                    src="https://freshcart.codescandy.com/assets/images/products/product-img-4.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div className="single-prod-name mt-1">{item.name}</div>
                  <div className="single-Variation mt-1">variation:1KG</div>
                  <div className="single-quantity mt-1">
                    QTY:{item.quantity}
                  </div>
                  <div className="single-price mt-1">₦{item.price}</div>
                </div>
                <button>Buy Again</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleOrder;
