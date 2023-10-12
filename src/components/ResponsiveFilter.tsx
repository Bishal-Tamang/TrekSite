import { useState, useEffect } from "react";

// import '../assets/Styles/responsivefilter.css'

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import { GrFormAdd } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";

import { Drawer } from "antd";

const CheckboxFilter = [
  {
    id: "things",
    name: "Things to do",
    options: [
      { value: "family", label: "Family tour" },
      { value: "outdoor", label: "Outdoor activities" },
      { value: "cultural", label: "Cultural tour" },
      { value: "day-trip", label: "Day trip" },
      { value: "couple", label: "Couple tour" },
      { value: "luxury", label: "Luxury tour" },
      { value: "short-trip", label: "Short trip" },
      { value: "religious", label: "Religious site tour" },
    ],
  },
];

const RadioFilter = [
  {
    id: "sort",
    name: "Sort By",
    options: [
      { value: "high-to-low", label: "Rating high to low" },
      { value: "low-to-high", label: "Rating low to high" },
      { value: "price-low-to-high", label: "Price low to high" },
      { value: "price-high-to-low", label: "Price high to low" },
    ],
  },
  {
    id: "price",
    name: "Price(Rs)",
    options: [
      { value: "very-cheap", label: "0-500" },
      { value: "cheap", label: "500-1000" },
      { value: "medium", label: "1000-1500" },
      { value: "expensive", label: "1500+" },
    ],
  },
];

const styles = {
  color: "#19A948",
  height: "1.3rem",
  width: "1.3rem",
  cursor: "pointer",
};

const ResponsiveFilter = () => {
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const [selectedPriceOption, setSelectedPriceOption] = useState("");


  const [selectedCheckboxOption, setSelectedCheckboxOption] = useState<string[]>([]);

  const handleSortOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedSortOption(selectedValue);
    console.log("Selected option: " + selectedValue);
  };

  const handlePriceOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedPriceOption(selectedValue);
    console.log("Selected option: " + selectedValue);
  };

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedCheckboxOption((prevSelectedOptions) => [
        ...prevSelectedOptions,
        value,
      ]);
    } else {
      setSelectedCheckboxOption((prevSelectedOptions) =>
        prevSelectedOptions.filter((option) => option !== value)
      );
    }
  };

  useEffect(() => {
    console.log("Selected Checkbox options:", selectedCheckboxOption);
  }, [selectedCheckboxOption]);

  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <div className="relative">
      <div className=" lg:hidden mx-auto -my-4">
        <button
          className="button flex gap-2 items-center font-['IBM_Plex_Sans'] font-[400] text-xl py-3 px-4 border-2 rounded-md"
          onClick={showDrawer}
        >
          Filter <GrFormAdd />
        </button>
        <Drawer
          className="custom--drawer"
          width={1080}
          closable={false}
          onClose={onClose}
          open={open}
        >
          <div>
            <div className="heading--section flex mx-4 my-4 justify-between items-center pb-2 border-gray-300">
              <h1 className="font-['Manrope'] font-[700] text-2xl md:text-4xl text-[#1E354C]">
                Filters
              </h1>
              <RxCross1 style={styles} onClick={onClose} />
            </div>

            <Disclosure>
              <>
                <Disclosure.Button className=" pr-4 flex w-full justify-between border-t border-[#D0D7E2] py-8 text-left font-['IBM_Plex_Sans'] font-[500] text-base text-gray-700">
                  <span className="ml-4 font-['Manrope'] font-[700] text-base md:text-xl text-[#1E354C]">
                    Things To Do
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-[#12A347]`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 py-2 font-['IBM_Plex_Sans'] font-[400] text-base text-gray-700">
                  {CheckboxFilter[0].options.map((option) => (
                    <div
                      key={option.value}
                      className="flex gap-4 mb-4 items-center text-base "
                    >
                      <input
                        type="checkbox"
                        name={option.value}
                        id={option.value}
                        value={option.value}
                        className="cursor-pointer text-[#1E354C]"
                        checked={selectedCheckboxOption.includes(option.value)}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor={option.value}
                        className="my-auto font-['IBM_Plex_Sans'] font-[400] text-[#1E354C] text-sm md:text-xl"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            </Disclosure>

            <Disclosure>
              <>
                <Disclosure.Button className=" pr-4 flex w-full justify-between border-t border-[#D0D7E2] py-8 text-left font-['IBM_Plex_Sans'] font-[500] text-base text-gray-700">
                  <span className="ml-4 font-['Manrope'] font-[700] text-base md:text-xl text-[#1E354C]">
                    Sort By
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-[#12A347]`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-2 font-['IBM_Plex_Sans'] font-[400] text-base text-gray-700">
                  {RadioFilter[0].options.map((option) => (
                    <div
                      key={option.value}
                      className="flex gap-4 mb-4 items-center"
                    >
                      <input
                        type="radio"
                        name={option.value}
                        id={option.value}
                        value={option.value}
                        className="cursor-pointer"
                        checked={selectedSortOption === option.value}
                        onChange={handleSortOptionChange}
                      />
                      <label
                        htmlFor={option.value}
                        className="my-auto font-['IBM_Plex_Sans'] text-gray-700 font-[400] text-sm  md:text-xl"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            </Disclosure>

            <Disclosure>
              <>
                <Disclosure.Button className=" pr-4 flex w-full justify-between border-t border-[#D0D7E2] py-8 text-left font-['IBM_Plex_Sans'] font-[500] text-base text-gray-700">
                  <span className="ml-4 font-['Manrope'] font-[700] text-base md:text-xl text-[#1E354C]">
                    Price (Rs.)
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-[#12A347]`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 py-2 font-['IBM_Plex_Sans'] font-[400] text-base text-gray-700">
                  {RadioFilter[1].options.map((option) => (
                    <div
                      key={option.value}
                      className="flex gap-4 mb-4 items-center"
                    >
                      <input
                        type="radio"
                        name={option.value}
                        id={option.value}
                        value={option.value}
                        className="cursor-pointer"
                        checked={selectedPriceOption === option.value}
                        onChange={handlePriceOptionChange}
                      />
                      <label
                        htmlFor={option.value}
                        className="my-auto font-['IBM_Plex_Sans'] text-gray-700 font-[400] text-sm  md:text-xl"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            </Disclosure>
          </div>
        </Drawer>
      </div>

      <div className="forms--section absolute hidden lg:grid grid-cols-1">
        <div className="things--section grid gap-3 mb-6">
          <h1 className="font-['IBM_Plex_Sans'] font-[500] text-gray-700 text-base">
            Things to do
          </h1>

          <div className="flex flex-col gap-2">
            {CheckboxFilter[0].options.map((option) => (
              <div key={option.value} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name={option.value}
                  id={option.value}
                  value={option.value}
                  className="cursor-pointer"
                  checked={selectedCheckboxOption.includes(option.value)}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor={option.value}
                  className="my-auto font-['IBM_Plex_Sans'] text-gray-700 font-[400] text-sm"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="sort-by--section grid grid-cols-1 gap-3 mb-6">
          <h1 className="font-['IBM_Plex_Sans'] font-[500] text-gray-700 text-base">
            Sort By
          </h1>

          <div className="flex flex-col">
            <label className="inline-flex items-center font-['IBM_Plex_Sans'] text-gray-700 font-[400] text-sm">
              <input
                type="radio"
                className="cursor-pointer"
                name="sort"
                value="rating_high_to_low"
                checked={selectedSortOption === "rating_high_to_low"}
                onChange={handleSortOptionChange}
              />
              <span className="ml-2">Rating high to low</span>
            </label>

            <label className="inline-flex items-center font-['IBM_Plex_Sans'] text-gray-700 font-[400] text-sm">
              <input
                type="radio"
                className="cursor-pointer"
                name="sort"
                value="rating_low_to_high"
                checked={selectedSortOption === "rating_low_to_high"}
                onChange={handleSortOptionChange}
              />
              <span className="ml-2">Rating low to high</span>
            </label>

            <label className="inline-flex items-center font-['IBM_Plex_Sans'] text-gray-700 font-[400] text-sm">
              <input
                type="radio"
                className="cursor-pointer"
                name="sort"
                value="price_low_to_high"
                checked={selectedSortOption === "price_low_to_high"}
                onChange={handleSortOptionChange}
              />
              <span className="ml-2">Price low to high</span>
            </label>

            <label className="inline-flex items-center font-['IBM_Plex_Sans'] text-gray-700 font-[400] text-sm">
              <input
                type="radio"
                className="cursor-pointer"
                name="sort"
                value="price_high_to_low"
                checked={selectedSortOption === "price_high_to_low"}
                onChange={handleSortOptionChange}
              />
              <span className="ml-2">Price high to low</span>
            </label>

            {/* <input type="radio" name="price-high-to-low" id="price-high-to-low" className="cursor-pointer"/>
          <label htmlFor="price-high-to-low" className="my-auto font-['IBM_Plex_Sans'] text-gray-700 font-[400] text-sm">Price high to low</label> */}
          </div>
        </div>

        <div className="Price--section grid grid-cols-1 gap-3">
          <h1 className="font-['IBM_Plex_Sans'] font-[500] text-gray-700 text-base">
            Price (Rs.)
          </h1>

          <div className="flex flex-col">
            <label className="inline-flex items-center font-['IBM_Plex_Sans'] text-gray-700 font-[400] text-sm">
              <input
                type="radio"
                className="cursor-pointer"
                name="price"
                value="very_cheap"
                checked={selectedPriceOption === "very_cheap"}
                onChange={handlePriceOptionChange}
              />
              <span className="ml-2">0 - 500</span>
            </label>

            <label className="inline-flex items-center font-['IBM_Plex_Sans'] text-gray-700 font-[400] text-sm">
              <input
                type="radio"
                className="cursor-pointer"
                name="price"
                value="cheap"
                checked={selectedPriceOption === "cheap"}
                onChange={handlePriceOptionChange}
              />
              <span className="ml-2">500 - 1000</span>
            </label>

            <label className="inline-flex items-center font-['IBM_Plex_Sans'] text-gray-700 font-[400] text-sm">
              <input
                type="radio"
                className="cursor-pointer"
                name="price"
                value="regular"
                checked={selectedPriceOption === "regular"}
                onChange={handlePriceOptionChange}
              />
              <span className="ml-2">1000 -1500</span>
            </label>

            <label className="inline-flex items-center font-['IBM_Plex_Sans'] text-gray-700 font-[400] text-sm">
              <input
                type="radio"
                className="cursor-pointer"
                name="price"
                value="expensive"
                checked={selectedPriceOption === "expensive"}
                onChange={handlePriceOptionChange}
              />
              <span className="ml-2">1500+</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveFilter;
