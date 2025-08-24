import React, { useState } from "react";
import order from "../../components/Orders";
import orderimg from "../../assets/images/png-transparent-shopping-trolley-with-parcel-boxes-shopping-trolley-parcel-box-shopping-cart-shopping-cart-3d-icon.png";
import { useNavigate } from "react-router";
const Orders = () => {
  const [orderFilter, setOrderFilter] = useState("shipping");
  const filterOrder = order.filter((item) => {
    if (item.orderStatus === orderFilter) {
      return item;
    }
  });
  const navigate = useNavigate();
  return (
    <div>
      <div className="order-container-body">
        <div className="order-head">My Orders</div>
        <div className="filter-order-body">
          <div
            className={`delivered-filter ${
              orderFilter === "shipping" ? "active" : ""
            }`}
            onClick={() => setOrderFilter("shipping")}
          >
            Ongoing
          </div>
          <div
            className={`delivered-filter ${
              orderFilter === "shipped" ? "active" : ""
            }`}
            onClick={() => setOrderFilter("shipped")}
          >
            delivered
          </div>
          <div
            className={`delivered-filter ${
              orderFilter === "cancelled" ? "active" : ""
            }`}
            onClick={() => setOrderFilter("cancelled")}
          >
            cancelled
          </div>
        </div>
        {filterOrder.length > 0 ? (
          filterOrder.map((item) => {
            return (
              <div className="order-item-body">
                <div className="order-item">
                  <div>
                    <img
                      src="https://villyz-store-md6b.vercel.app/static/media/b4728tKYUsFQNOfV.537d369a65a20af92a46.webp"
                      alt=""
                    />
                  </div>
                  <div className="mt-2">
                    <div className="order-name">ORDER_{item.id}</div>
                    <div
                      className={`order-status ${
                        item.orderStatus === "shipped"
                          ? "delivered"
                          : item.orderStatus === "shipping"
                          ? "pending"
                          : "cancelled"
                      }`}
                    >
                      {item.orderStatus}
                    </div>

                    <div className="order-date">On 20-03-2025</div>
                  </div>
                  <div
                    className="see-details"
                    onClick={() =>
                      navigate("/order-details", {
                        state: {
                          id: item.id,
                        },
                      })
                    }
                  >
                    See details
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-order">
            <div className="no-order-image">
              <img loading="lazy" src={orderimg} alt="" />
            </div>
            <div className="no-order-head">
              No{" "}
              {orderFilter === "cancelled"
                ? "closed"
                : orderFilter === "shipped"
                ? "delivered"
                : "pending"}{" "}
              order to display
            </div>
            <div className="no-order-content">
              All your{" "}
              {orderFilter === "cancelled"
                ? "closed"
                : orderFilter === "shipped"
                ? "delivered"
                : "pending"}{" "}
              order will be saved here
            </div>
            <button onClick={() => navigate("/")}>Start shopping</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
