import React, { useEffect, useState } from "react";
import orderimg from "../../assets/images/png-transparent-shopping-trolley-with-parcel-boxes-shopping-trolley-parcel-box-shopping-cart-shopping-cart-3d-icon.png";
import { useNavigate } from "react-router";
import axios from "axios";

const Orders = () => {
  const [orderFilter, setOrderFilter] = useState("shipping");
  const [orders, setOrders] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const FetchOrder = async () => {
    try {
      setLoader(true);
      const response = await axios.get(`${process.env.REACT_APP_API}/orders`);
      if (response) {
        const userId = localStorage.getItem("userId");

        setOrders(
          response.data.message.filter((item) => item.UserID == userId)
        );
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      alert("Error fetching orders");
    } finally {
      setLoader(false);
    }
  };
  console.log(orders);

  useEffect(() => {
    FetchOrder();
  }, []);

  // ✅ filter API orders, not imported dummy data
  const filteredOrders = orders.filter(
    (item) => item.orderStatus === orderFilter
  );

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
              orderFilter === "delivered" ? "active" : ""
            }`}
            onClick={() => setOrderFilter("delivered")}
          >
            Delivered
          </div>
          <div
            className={`delivered-filter ${
              orderFilter === "cancelled" ? "active" : ""
            }`}
            onClick={() => setOrderFilter("cancelled")}
          >
            Cancelled
          </div>
        </div>
        {loader ? (
          <div className="text-center mt-4">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <div className="getting-text">getting orders..</div>
          </div>
        ) : (
          <div className="orders-cont">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((item) => (
                <div key={item.id} className="order-item-body">
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
                          item.orderStatus === "delivered"
                            ? "delivered"
                            : item.orderStatus === "shipping"
                            ? "pending"
                            : "cancelled"
                        }`}
                      >
                        {item.orderStatus}
                      </div>
                      <div className="order-date">On {item.date}</div>
                    </div>
                    <div
                      className="see-details"
                      onClick={() =>
                        navigate(`/order-details/${item._id}`, {
                          state: { id: item._id, orders: orders },
                        })
                      }
                    >
                      See details
                    </div>
                  </div>
                </div>
              ))
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
                  orders will be saved here
                </div>
                <button onClick={() => navigate("/")}>Start shopping</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
