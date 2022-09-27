import React from "react";

const NavItems = ({
  country,
  selectedCountry,
  setSelectedCountry,
  eventCounts,
}) => {

  const selectCountry = () => {
    setSelectedCountry(country);
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
        {country.countryName} {eventCounts > 0 && `(${eventCounts})`}
      </p>
    </div>
  );
};

export default NavItems;
