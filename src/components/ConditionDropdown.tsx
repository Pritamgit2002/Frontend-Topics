import React, { useState } from "react";

type Props = {};

export const countries = [
  { id: 1, name: "India", cities: ["Kolkata", "Mumbai", "Pune"] },
  { id: 2, name: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
  { id: 3, name: "China", cities: ["Beijing", "Shanghai", "Guangzhou"] },
];

export const ConditionDropdown = (props: Props) => {
  const [selectedCountryId, setSelectedCountryId] = useState<number | null>(
    null
  );
  const [selectedCityName, setselectedCityName] = useState<String>("");

  return (
    <div className="w-max flex flex-col items-center justify-start gap-y-4 h-96 p-6 bg-gray-100 rounded-lg shadow-md">
      <span className="text-xl font-semibold text-gray-800">
        Conditional Dropdown
      </span>
      <div className="flex items-start justify-center gap-x-4">
        {/* Country Dropdown */}
        <select
          onChange={(e) => setSelectedCountryId(Number(e.target.value))}
          className="bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Country</option>
          {countries.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        {/* City Dropdown (conditionally rendered) */}
        {selectedCountryId && (
          <select
            name="city"
            id="city"
            className="bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setselectedCityName(e.target.value)}
          >
            <option value="">Select City</option>
            {countries
              .filter((item) => item.id === selectedCountryId)
              .flatMap((item) =>
                item.cities.map((city, i) => (
                  <option key={i} value={city}>
                    {city}
                  </option>
                ))
              )}
          </select>
        )}
      </div>
      <span className="text-base font-medium text-gray-800">
        {selectedCountryId &&
          `Country name: ${countries
            .filter((item) => item.id === selectedCountryId)
            .map((item) => item.name)}
          `}
      </span>
      <span className="text-base font-medium text-gray-800">
        {selectedCityName && `City name:${selectedCityName}`}
      </span>
    </div>
  );
};
