import React, { useContext, useEffect, useState } from "react";
import "./Checkout.css";
import { Link, useLocation } from "react-router";
import { MdChevronRight } from "react-icons/md";
import NavSm from "../../components/NavSm/NavSm";
import { LiaOpencart, LiaTrashAlt } from "react-icons/lia";
import { MdEdit } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
import { PaystackButton } from "react-paystack";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import NavBar from "../../components/NavBar/NavBar";
import { IoLocation } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { ShopContext } from "../../components/Context/ShopContext";
import PaystackPop from "@paystack/inline-js";
import { useNavigate } from "react-router";
import Footer from "../../components/Footer/Footer";
const Checkout = () => {
  const navigate = useNavigate();
  const { product, cartItems, getTotalValue } = useContext(ShopContext);
  const location = useLocation();
  const coupon = location.state || {};
  const { couponDiscount } = coupon;
  const cartProducts = product.filter(
    (itm) => cartItems && cartItems[itm.id] && cartItems[itm.id] > 0
  );
  const [addressModal, setAddressModal] = useState(false);
  const [addressList, setAddressList] = useState([]);
  const [user, setUser] = useState([]);
  const [delLoader, setDeleteLoader] = useState(null);
  const [fetchLoader, setFetchLoader] = useState(false);
  const [loader, setAddLoader] = useState(false);
  const [defaultLoader, setDefaultLoader] = useState(false);
  const [loaderPage, setLoaderPage] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState(null);
  // add Address State
  const [addressAdd, setAddressAdd] = useState({
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    SparePhoneNumber: "",
    street: "",
    city: "",
    Region: "",
    Note: "",
    Fee: totalPrice,
    isDefault: false,
  });

  const userId = localStorage.getItem("userId");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressAdd((prev) => ({ ...prev, [name]: value }));
  };
  const fetchAllAddress = async () => {
    try {
      setFetchLoader(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API}/address/${userId}`
      );
      if (response) {
        console.log(response.data);
        setAddressList(response.data);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setFetchLoader(false);
    }
  };
  useEffect(() => {
    fetchAllAddress();
  }, []);
  const [locations, setLocation] = useState({});
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/countries`
        );
        const locationsData = response.data.reduce((acc, location) => {
          acc[location.Region] = {
            price: location.price,
            city: location.city,
          };
          return acc;
        }, {});
        setLocation(locationsData);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSelectedLocation(location);
    setSelectedState(""); // Reset state selection

    setAddressAdd((prev) => ({
      ...prev,
      Region: location, // save selected region
      city: "", // reset city when region changes
    }));

    if (location) {
      const locationPrice = locations[location].price;
      setTotalPrice(locationPrice);
    } else {
      setTotalPrice(0);
    }
  };

  const handleStateChange = (e) => {
    const city = e.target.value;
    setSelectedState(city);

    setAddressAdd((prev) => ({
      ...prev,
      Region: selectedLocation,
      city, // ✅ set selected city
    }));

    if (city) {
      const statePrice = locations[selectedLocation].city[city];
      const locationPrice = locations[selectedLocation].price;
      setTotalPrice(locationPrice + statePrice);
    }
  };

  const handleAddAddress = async () => {
    if (
      !addressAdd.FirstName ||
      !addressAdd.LastName ||
      !addressAdd.PhoneNumber ||
      !addressAdd.city ||
      !addressAdd.street ||
      !addressAdd.Region
    ) {
      console.log(addressAdd);

      toast.error("All required fields must be filled");
      return;
    }

    try {
      setAddLoader(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API}/addAddress`,
        {
          ...addressAdd,
          Fee: totalPrice,
          userId,
        }
      );
      if (response) {
        toast.success("Address added successfully");
        fetchAllAddress();

        // Reset form
        setAddressAdd({
          FirstName: "",
          LastName: "",
          PhoneNumber: "",
          SparePhoneNumber: "",
          street: "",
          city: "",
          Region: "",
          Note: "",
          Fee: 0,
          isDefault: false,
        });

        setAddressModal(false);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Server error");
    } finally {
      setAddLoader(false);
    }
  };
  const handleDeleteAddress = async (id) => {
    try {
      setDeleteLoader(id);
      const response = await axios.delete(
        `${process.env.REACT_APP_API}/address/${id}`
      );

      if (response.status === 200) {
        toast.success(" address deleted successfully");

        // Update the AllAddress state by removing the deleted address
        fetchAllAddress();
      } else {
        toast.error("problem deleting address");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setDeleteLoader(null);
    }
  };
  const setDefaultAddress = async (id) => {
    try {
      setDefaultLoader(true);
      const response = await axios.put(
        `${process.env.REACT_APP_API}/addresses/${id}/set-default`,
        { userId } // in case your backend needs userId
      );

      if (response.status === 200) {
        toast.success("Default address selected");

        // Update state: set the clicked address as default, others as false
        setAddressList((prev) =>
          prev.map((address) => ({
            ...address,
            isDefault: address._id === id,
          }))
        );
      }
    } catch (error) {
      console.error("Error updating default address:", error);
      toast.error(error.response?.data?.message || "Server error");
    } finally {
      setDefaultLoader(false);
    }
  };

  //Post Order State
  const [form, setForm] = useState({
    UserID: "",
    name: "",
    email: "",
    OrderPrice: "",
    paymentStatus: "",
    paymentReference: "",
    deliveryFee: totalPrice,
    // orderStatus: "ongoing",
    phoneNumber: "",
    secondNumber: "",
    cartItems: cartProducts,
    street: "",
    state: "",
    region: "",
  });

  useEffect(() => {
    if (cartProducts?.length > 0) {
      const updatedCartItems = cartProducts.map((item) => ({
        productId: item.id,
        productName: item.name,
        quantity: cartItems[item.id] || 1, // Default to 1
        Price: Number(item.newPrice) * (cartItems[item.id] || 1),
      }));

      // Prevent unnecessary state updates by comparing old vs new
      setForm((prevForm) => {
        const prevString = JSON.stringify(prevForm.cartItems);
        const newString = JSON.stringify(updatedCartItems);
        if (prevString === newString) return prevForm; // No change
        return {
          ...prevForm,
          cartItems: updatedCartItems,
        };
      });
    }
  }, [cartItems, cartProducts]);
  const allUsers = async () => {
    try {
      const userFETCH = await axios.get(`${process.env.REACT_APP_API}/allUser`);
      if (userFETCH) {
        setUser(userFETCH.data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUser = user.find((item) => item._id === userId);
  // console.log(selectedAddress);

  const publicKey = "pk_test_906a70561b64d6cbee516bc9258552ffce77f14a"; // Replace with your Paystack public key
  const date = new Date(); // current date
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const sendOrder = async (formDataObject, transaction) => {
    setLoaderPage(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/addOrder`,
        formDataObject
      );

      // ✅ get backend orderId
      const OrderIdentity = response.data.order?._id;

      navigate(`/Order-successful/${userId}`, {
        state: {
          OrderIdentity, // backend _id for tracking
          orderId: transaction.reference, // payment reference
          name: fetchUser?.FullName,
          email: fetchUser?.email,
          address: selectedAddress,
          phone: fetchUser?.phoneNumber,
          Orders: formDataObject.cartItems,
          shipping: 300,
          discount: couponDiscount || 0,
          date: formattedDate,
        },
      });
    } catch (error) {
      console.error("Error sending order:", error);
    } finally {
      setLoaderPage(false);
    }
  };

  const payWithPaystack = () => {
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: publicKey,
      amount: (getTotalValue() + 276 - (couponDiscount || 0)) * 100, // fix operator precedence
      email: fetchUser?.email,
      name: fetchUser?.FullName,

      onSuccess: async (transaction) => {
        toast.success(`Payment Complete! Ref: ${transaction.reference}`);
        setPaymentStatus("paid");

        // Prepare cart items in the exact shape backend expects
        const updatedCartItems = cartProducts.map((item) => ({
          productId: item.id,
          name: item.name,
          image: item.image, // make sure you include image!
          price: Number(item.newPrice),
          quantity: cartItems[item.id] || 1,
        }));

        // Prepare form data for backend
        const formDataObject = {
          UserID: localStorage.getItem("userId"),
          name: fetchUser?.FullName,
          email: fetchUser?.email,
          phoneNumber: fetchUser?.phoneNumber || "",
          SecondNumber: selectedAddress?.SparePhoneNumber || "",
          DeliveryFee: form.deliveryFee,
          OrderPrice: getTotalValue() + totalPrice - (couponDiscount || 0),
          street: selectedAddress?.street,
          Region: selectedAddress?.Region,
          city: selectedAddress?.city,
          paymentReference: transaction.reference,
          Note: form.Note,
          date: formattedDate,
          // orderStatus: form.orderStatus,
          cartItems: updatedCartItems, // ✅ aligned with backend
        };

        sendOrder(formDataObject, transaction);
      },

      onCancel: () => {
        toast.error("Payment Cancelled");
      },
    });
  };

  return (
    <div>
      {loaderPage ? (
        <>
          <div className="nav-form">
            <Link className="logo" to="/">
              <div>
                <LiaOpencart className="logo-icon" />
              </div>
              <div>FizzMart</div>
            </Link>
          </div>
          <div className="Loader-page">
            <span class="loader"></span>
            <div className="load-text">
              Please wait, confirming your order....
            </div>
          </div>
        </>
      ) : (
        <div>
          <NavSm />
          <NavBar />
          <div className="home-container">
            <div className="bread-crumb mt-3">
              <Link to="/" className="bread-crumb-link">
                Home
              </Link>
              <div className="slash">
                <MdChevronRight />
              </div>
              <span>Shop</span>
              <div className="slash">
                <MdChevronRight />
              </div>
              Shopping Cart
            </div>

            <div className="cart-header">Checkout</div>
            <div className="cart-content">
              Review your selected items before continuing
            </div>
            <div className="checkout-container">
              <div className="checkout-address">
                <div className="checkout-address-head">
                  <div className="d-flex align-items-center ">
                    <div className="mb-1 me-1">
                      <CiLocationOn />
                    </div>
                    Add delivery address
                  </div>
                  <button onClick={() => setAddressModal(true)}>
                    Add a new address
                  </button>
                </div>
                {addressModal && (
                  <div className="address-overlay">
                    <div className="add-adress-modal">
                      <div className="modal-head">New Delivery Address</div>
                      <div className="modal-content">
                        Add new delivery address for your order delivery
                      </div>
                      <div className="modal-input-flex">
                        <div className="modal-flex-item">
                          <label htmlFor="">First name</label>
                          <input
                            value={addressAdd.FirstName}
                            onChange={handleInputChange}
                            name="FirstName"
                            type="text"
                            placeholder="First name"
                          />
                        </div>
                        <div className="modal-flex-item">
                          <label htmlFor="">Last name</label>
                          <input
                            value={addressAdd.LastName}
                            onChange={handleInputChange}
                            name="LastName"
                            type="text"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                      <div className="modal-input-flex">
                        <div className="modal-flex-item">
                          <label htmlFor="">Phone number</label>
                          <input
                            value={addressAdd.PhoneNumber}
                            onChange={handleInputChange}
                            name="PhoneNumber"
                            type="text"
                            placeholder="Prefix (+234)"
                          />
                        </div>
                        <div className="modal-flex-item">
                          <label htmlFor="">Additional Phone number</label>
                          <input
                            value={addressAdd.SparePhoneNumber}
                            onChange={handleInputChange}
                            name="SparePhoneNumber"
                            type="text"
                            placeholder="Prefix (+234)"
                          />
                        </div>
                      </div>
                      <div className="modal-input-flex">
                        <div className="modal-flex-item-lg">
                          <label htmlFor="">Delivery Address</label>
                          <input
                            value={addressAdd.street}
                            onChange={handleInputChange}
                            name="street"
                            type="text"
                            placeholder="Enter Delivery Address"
                          />
                        </div>
                      </div>
                      <div className="modal-input-flex">
                        <div className="modal-flex-item-lg">
                          <label htmlFor="">Additional Information</label>
                          <input
                            value={addressAdd.Note}
                            onChange={handleInputChange}
                            name="Note"
                            type="text"
                            placeholder="Enter Additional Information"
                          />
                        </div>
                      </div>
                      <div className="modal-input-flex">
                        <div className="modal-flex-item-select">
                          <label htmlFor="">Region</label>
                          <select
                            className="select"
                            onChange={handleLocationChange}
                            value={selectedLocation}
                          >
                            <option value="">Select Region</option>
                            {Object.keys(locations).map((region) => (
                              <option key={region} value={region}>
                                {region}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="modal-flex-item-select">
                          <label htmlFor="">City</label>
                          <select
                            className="select"
                            onChange={handleStateChange}
                            value={selectedState}
                            disabled={!selectedLocation}
                          >
                            <option value="kkkk">Select City</option>
                            <option value="kkkk">Select City</option>
                            {selectedLocation &&
                              Object.keys(locations[selectedLocation].city).map(
                                (city) => (
                                  <option key={city} value={city}>
                                    {city}
                                  </option>
                                )
                              )}
                          </select>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-1 checkBox mt-3">
                        <div>
                          <input
                            type="checkbox"
                            checked={addressAdd.isDefault}
                            onChange={(e) =>
                              setAddressAdd((prev) => ({
                                ...prev,
                                isDefault: e.target.checked,
                              }))
                            }
                          />
                        </div>
                        <div className="mt-1">
                          <label htmlFor="">Set as default</label>
                        </div>
                      </div>

                      <div className="add-address-modal">
                        <button onClick={handleAddAddress}>
                          {loader ? "loading..." : "Add Address"}
                        </button>
                      </div>
                      <div
                        className="cancel-modal-btn"
                        onClick={() => setAddressModal(false)}
                      >
                        <RiCloseLargeFill />
                      </div>
                    </div>
                  </div>
                )}
                {fetchLoader ? (
                  <div className="my-4 text-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <div className="loading-text">loading Addresses.....</div>
                  </div>
                ) : addressList.length === 0 ? (
                  <div className="empty-text mb-3">
                    No address present add a new address
                  </div>
                ) : (
                  <div className="address-item-body1">
                    {addressList.map((item) => (
                      <div className="address-item">
                        <div className="address-top">
                          <div className="address-name">
                            <span>{item.FirstName}</span> {"  "}
                            <span>{item.LastName}</span>
                          </div>
                          <div className="address-main-text">{item.Region}</div>
                          <div className="address-main-text">{item.street}</div>
                          <div className="address-main-text">{item.city}</div>
                          <div className="address-number">
                            {item.PhoneNumber}
                          </div>
                          <div className="address-number mt-2">
                            {item.SparePhoneNumber}
                          </div>
                          {item.isDefault ? (
                            <div className="default-name btn btn-outline-success">
                              Selected Address
                            </div>
                          ) : null}
                        </div>
                        <div className="address-line"></div>
                        <div className="address-item-bottom">
                          {item.isDefault ? (
                            <div className="default-text">Selected Address</div>
                          ) : (
                            <div
                              className="default-text-active"
                              onClick={() => setDefaultAddress(item._id)}
                              style={{ cursor: "pointer" }}
                            >
                              {defaultLoader ? "Updating..." : "Set as default"}
                            </div>
                          )}

                          <div className="d-flex align-items-center gap-2">
                            {delLoader === item._id ? (
                              <div className="bottom-address-icon">
                                <div
                                  className="spinner-border spinner-border-sm"
                                  role="status"
                                >
                                  <span className="visually-hidden">
                                    Loading...
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <div
                                onClick={() => handleDeleteAddress(item._id)}
                                className="bottom-address-icon"
                              >
                                <LiaTrashAlt />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="checkout-prod shadow-sm">
                <div className="check-out-order-head">Order Details</div>
                <div>
                  {cartProducts.map((item) => (
                    <div className="checkout-items">
                      <div className="d-flex align-items-center gap-1">
                        <div>
                          <img src={item.image} alt="" />
                        </div>
                        <div>
                          <div className="checkout-prod-name">{item.name}</div>
                          <div className="checkout-prod-variation">1kg</div>
                        </div>
                      </div>
                      <div className="quantity">QTY:{cartItems[item.id]}</div>
                      <div className="price">
                        ₦{item.newPrice * cartItems[item.id]}
                      </div>
                    </div>
                  ))}

                  <div className="checkout-items-prices">
                    <div className="d-flex align-items-center justify-content-between gap-1">
                      <div>Item total</div>
                      <div className="price">₦{getTotalValue()}</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-1">
                      <div>Delivery</div>
                      <div className="price">
                        ₦{totalPrice.toLocaleString()}
                      </div>
                    </div>
                    {couponDiscount ? (
                      <div className="d-flex align-items-center justify-content-between gap-1">
                        <div>Discount</div>
                        <div className="price">-₦{couponDiscount}</div>
                      </div>
                    ) : null}
                  </div>

                  <div className="checkout-items-prices">
                    <div className="d-flex align-items-center justify-content-between gap-1">
                      <div>Total</div>
                      <div className="price">
                        ₦{getTotalValue() + 276 - couponDiscount || 0}
                      </div>
                    </div>
                  </div>
                  <div className="checkout-items-prices">
                    {fetchLoader || addressList.length === 0 ? (
                      <button
                        className="disabled"
                        onClick={() =>
                          toast.error(
                            "Kindly add your address before proceeding to payment"
                          )
                        }
                      >
                        Pay Now ₦{getTotalValue() + 276 - couponDiscount || 0}{" "}
                      </button>
                    ) : (
                      <button
                        disabled={getTotalValue() === 0}
                        onClick={payWithPaystack}
                      >
                        Pay Now ₦{getTotalValue() + 276 - couponDiscount || 0}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
