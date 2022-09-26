import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCountry } from "../../../store/features/countries/coutrySlice";

const NavItems = ({ country }) => {
  const dispatch = useDispatch();

  const { selectedCountry } = useSelector((state) => state.countries);
  const { events } = useSelector((state) => state.events);

  const countEvents = () => {
    const count = events.filter(
      (event) => event?.countryCode === country?.countryCode
    );
    if (count.length > 0) {
      return count.length;
    }
  };

  const selectCountry = () => {
    dispatch(setSelectedCountry(country));
  };
  return (
    <div className="country">
      <p
        role="button"
        onClick={selectCountry}
        className={`${
          selectedCountry?.countryCode === country.countryCode && "active"
        }`}
      >
        {country.countryName} {countEvents() && `(${countEvents()})`}
      </p>
    </div>
  );
};

export default NavItems;
