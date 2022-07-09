import React, { useState } from "react";
import "./Header.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListitems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListitems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListitems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListitems">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListitems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime discounts? it is genius!</h1>
        <p className="headerDesc">
          Get rewarded for your travels - unlock instant saving of 10% or more
          than a booking free account!
        </p>
        <button className="headerButton">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].startDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText">
              {`${options.adult} adult . ${options.children} children . ${options.room} room`}
            </span>
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    onClick={() => handleOption("adult", "d")}
                    className="optionCounterButton"
                  >
                    -
                  </button>
                  <span
                    className="optionCounterNumber"
                    onClick={() => handleOption("adult", "i")}
                  >
                    1
                  </span>
                  <button
                    onClick={() => handleOption("adult", "i")}
                    className="optionCounterButton"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    onClick={() => handleOption("children", "d")}
                    className="optionCounterButton"
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">0</span>
                  <button
                    onClick={() => handleOption("children", "i")}
                    className="optionCounterButton"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button
                    onClick={() => handleOption("room", "d")}
                    className="optionCounterButton"
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">1</span>
                  <button
                    onClick={() => handleOption("room", "i")}
                    className="optionCounterButton"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="headerSearchItem">
            <span className="headerButton">Search</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
