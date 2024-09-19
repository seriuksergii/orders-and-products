import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../slices/productsSlice';
import DateAndTime from '../DateAndTime/DateAndTime';
import './TopMenu.scss';

const TopMenu: React.FC = () => {
  const [searchQuery, setSearchQueryLocal] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQueryLocal(value);
    dispatch(setSearchQuery(value));
  };

  return (
    <div className="top-menu">
      <div className="top-menu_container">
        <div className="top-menu_logo_input">
          <img
            className="top-menu_logo"
            src="/src/assets/logo.png"
            alt="logo"
          />
          <span className="top-menu_title">inventory</span>
          <input
            className="top-menu_input"
            type="text"
            placeholder="Пошук"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <DateAndTime />
      </div>
    </div>
  );
};

export default TopMenu;
