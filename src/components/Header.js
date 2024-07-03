import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCalendar, faClose ,faRotateLeft} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <div className='navbar'>
      <div className="input-container">
        <input type="text" placeholder="Abu Dhabi International Book Fair 2024                            |" className="input-field-l" />
        <FontAwesomeIcon icon={faChevronDown} className="icon" />
      </div>
      <div className="input-container">
        <FontAwesomeIcon icon={faCalendar} className="icon-l" />
        <input type="text" placeholder="02/04/2024 -> 25/06/2024" className="input-field-c" />
        <FontAwesomeIcon icon={faClose} className="icon" />
      </div>
      <div>
        <button className='detail'>More Details</button>
      </div>
      <div className="input-container right">
      <button className='input-field-r' >PDF</button>
        {/* <input type="button" placeholder="PDF" className="input-field-r" /> */}
        <FontAwesomeIcon icon={faRotateLeft} className="icon-r" />
      </div>
    </div>
  );
}

export default Header;
