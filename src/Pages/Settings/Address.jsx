import React from "react";
import { LiaTrashAlt } from "react-icons/lia";
import { MdEdit } from "react-icons/md";

const Address = () => {
  return (
    <div className="address-body">
      <div className="address-head">
        <div className="address-header">Address(2)</div>
        <button>Add a new Address</button>
      </div>
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
            <div className="address-number">+2348069989705/+2349069989705</div>
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
