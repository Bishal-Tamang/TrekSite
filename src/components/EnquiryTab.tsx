import React, { useState } from "react";
import { Button, Drawer } from "antd";

import Features from "./Features";

import '../assets/Styles/EnquiryTab.css';

import EnquiryForm from "./Forms/EnquiryForm";

import {RxCross1} from 'react-icons/rx'

import first from '../assets/Picture/Features/currency.png';
import second from '../assets/Picture/Features/navigation.png';
import third from '../assets/Picture/Features/badge.png';

const data = [
  {
    id: 1,
    icon: first,
    title: "Stay Flexible",
    content: "Flexible cancellation options on all venues",
  },
  {
    id: 2,
    icon: second,
    title: "50+ Travel Destination",
    content: "Different destination for travel all available here.",
  },
  {
    id: 3,
    icon: third,
    title: "Book with confidence",
    content: "Easy booking and skip-the-line tickets on your phone",
  },
];

const styles = {
  color: "#19A948",
  height: "1.3rem",
  width: "1.3rem",
  cursor: "pointer"
}

const EnquiryTab: React.FC = () => {
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
    <div className="">
      <button className="bg-[#19A948] text-white py-3 px-4 rounded-md hover:bg-[#128B2B]" onClick={showDrawer}>
        Enquiry now
      </button>
      <Drawer 
      className="custom--drawer"
      width={1080} 
      closable={false} 
      onClose={onClose}
      open={open}>
        <div className="parent--container flex flex-col-reverse md:h-full md:flex-row w-full">
          
          <div className="left--portion bg-[#323C52] md:pl-4 pt-14 pb-14 md:pb-0 md:w-[35%]">
            <h1 className="font-['Manrope'] font-[700] text-base text-center md:text-auto text-gray-50 mb-8">Why book packages with Travel?</h1>

            <div className=" grid grid-cols-1 mx-2 gap-6 md:gap=2 md:max-w-[90%]">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#E8FBF1] flex items-center md:flex-row gap-5 md:items-start py-4 px-5 rounded-xl"
                >
                  <div className="icon">
                    <img src={item.icon} className="" alt="" />
                  </div>

                  <div className="content">
                    <h1 className='font-["Manrope"] font-[600] text-base text-gray-600 mb-2'>
                      {item.title}
                    </h1>
                    <p className='font-["IBM_Plex_Sans"] font-[400] text-base text-gray-600 '>
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="right--portion md:w-[65%] px-6 pt-12">
            <div className="flex justify-between w-full items-center">
              <h1 className="font-['Manrope'] font-[700] text-2xl text-[#1E354C] ">Tour Enquiry</h1>
              <RxCross1 style={styles} onClick={onClose}/>
            </div>

            <div className="mb-4 md:mb-0`">
            <EnquiryForm />
            </div>

          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default EnquiryTab;
