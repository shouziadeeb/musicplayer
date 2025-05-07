import React from 'react';
import { FaChevronLeft, FaChevronRight, FaUser } from 'react-icons/fa';

function Header() {
  return (
    <div className="header">
      <div className="left-header">
        <button>
          <FaChevronLeft />
        </button>
        <button>
          <FaChevronRight />
        </button>
      </div>
      <div className="rightHeader">
        <button className="LoginImgBtn">
          <FaUser />
        </button>
      </div>
    </div>
  );
}

export default Header;
