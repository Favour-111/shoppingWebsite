import React, { useState } from "react";
import { LiaTrashAlt } from "react-icons/lia";
import { MdEdit } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";

const Address = () => {
  const [addressModal, setAddressModal] = useState(false);
  return (
    <div className="address-body">
      <div className="address-head">
        <div className="address-header">Address(2)</div>
        <button onClick={() => setAddressModal(true)}>Add a new Address</button>
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
                <input type="text" placeholder="First name" />
              </div>
              <div className="modal-flex-item">
                <label htmlFor="">Last name</label>
                <input type="text" placeholder="Last name" />
              </div>
            </div>
            <div className="modal-input-flex">
              <div className="modal-flex-item">
                <label htmlFor="">Phone number</label>
                <input type="text" placeholder="Prefix (+234)" />
              </div>
              <div className="modal-flex-item">
                <label htmlFor="">Additional Phone number</label>
                <input type="text" placeholder="Prefix (+234)" />
              </div>
            </div>
            <div className="modal-input-flex">
              <div className="modal-flex-item-lg">
                <label htmlFor="">Delivery Address</label>
                <input type="text" placeholder="Enter Delivery Address" />
              </div>
            </div>
            <div className="modal-input-flex">
              <div className="modal-flex-item-lg">
                <label htmlFor="">Additional Information</label>
                <input type="text" placeholder="Enter Additional Information" />
              </div>
            </div>
            <div className="modal-input-flex">
              <div className="modal-flex-item-select">
                <label htmlFor="">Region</label>
                <select name="" id="">
                  <option value="">Gombe</option>
                  <option value="">Lagos</option>
                  <option value="">Ogun</option>
                  <option value="">Ekiti</option>
                </select>
              </div>
              <div className="modal-flex-item-select">
                <label htmlFor="">Region</label>
                <select name="" id="">
                  <option value="">Gombe</option>
                  <option value="">Lagos</option>
                  <option value="">Ogun</option>
                  <option value="">Ekiti</option>
                </select>
              </div>
            </div>
            <div className="d-flex align-items-center gap-1 checkBox mt-3">
              <div>
                <input type="checkbox" />
              </div>
              <div className="mt-1">
                <label htmlFor="">Set as default</label>
              </div>
            </div>
            <div className="add-address-modal">
              <button>Add Address</button>
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
      <div className="address-item-body">
        <div className="address-item">
          <div className="address-top">
            <div className="address-name">omojola obaloluwa</div>
            <div className="address-main-text">
              35 joy ogunnike street Gra ikeja yellow chilli 35 joy ogunnike
              street Gra ikeja Ikeja (GRA), Lagos
            </div>
            <div className="address-number">+2348069989705</div>
            <div className="address-number mt-2">+2349069989705</div>
            <div className="default-name btn btn-outline-success">
              Default Address
            </div>
          </div>
          <div className="address-line"></div>
          <div className="address-item-bottom">
            <div className="default-text">Set as default</div>
            <div className="d-flex align-items-center gap-2">
              <div className="bottom-address-icon">
                <MdEdit />
              </div>
              <div className="bottom-address-icon">
                <LiaTrashAlt />
              </div>
            </div>
          </div>
        </div>
        <div className="address-item">
          <div className="address-top">
            <div className="address-name">omojola obaloluwa</div>
            <div className="address-main-text">
              35 joy ogunnike street Gra ikeja yellow chilli 35 joy ogunnike
              street Gra ikeja Ikeja (GRA), Lagos
            </div>
            <div className="address-number">+2348069989705 </div>
            <div className="address-number">+2348069989705 </div>
            <div className="default-name btn btn-outline-success">
              Default Address
            </div>
          </div>
          <div className="address-line"></div>
          <div className="address-item-bottom">
            <div className="default-text">Set as default</div>
            <div className="d-flex align-items-center gap-2">
              <div className="bottom-address-icon">
                <MdEdit />
              </div>
              <div className="bottom-address-icon">
                <LiaTrashAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
