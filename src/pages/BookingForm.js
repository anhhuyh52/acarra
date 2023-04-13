import { ReactComponent as IconClose } from "../assets/icons/icon_close.svg";
import { ReactComponent as CalendarIcon } from "../assets/icons/icon_calendar.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/icon_location.svg";
import { ReactComponent as CheckBox } from "../assets/icons/unchecked.svg";
import jpLesson from "../assets/images/jp_lesson.png";
import { useState } from "react";

const BookingForm = () => {
  const [currentMethod, setCurrentMethod] = useState(0);
  const user = {
    name: "John",
    phone_number: "(88) 99602-  2404",
  };

  const selectedService = {
    name: "Japanese lessons",
    date: "Nov 7, 2020 · 11:30",
    place: "Client`s place",
    price: "350.000",
    image: jpLesson,
  };

  const paymentMethods = ["Cash", "Credit Card", "eWallet/Virtual bank"];

  return (
    <div className="booking_form-page w-[390px] h-[1037.4px] bg-white">
      <div className="booking_form-page--header bg-neutral-800 text-white flex h-[113.36px] px-[26px] font-[364] py-[17.68px]">
        <p className="block text-[25px] font-[700] text-left leading-[35.36px]">
          Choose the form of payment
        </p>
        <IconClose className="mr-[3.12px] w-[15px] h-[15px] cursor-pointer mt-[12px]" />
      </div>
      <div className="booking_form-page--content p-[26px] pb-0">
        <div className="user-auth-part w-[338px] bg-[#F7FAFC] h-[85.28px] border-solid border rounded-[10.4px] border-[#D3DEE9] flex items-center px-[19.24px] py-[20.28px]">
          <span className="user-auth-char px-[19.76px] py-[5.72px] w-[46.8px] h-[46.8px] rounded-full bg-[#EDF2F7] font-bold uppercase text-[20.8px] leading-[28.08px]">
            {Array.from(user.name)[0]}
          </span>
          <div className="user-auth-info ml-[13.52px] flex flex-col mt-[-6.24px]">
            <p className="text-[20.8px] leading-[28.08px] text-left font-[600] mb-[2.08px]">
              {user.name}
            </p>
            <span className="text-[13.52px] min-w-[130px] leading-[18.2px] text-[#718096] font-[500] text-left">
              {user.phone_number}
            </span>
          </div>
          <button class="ml-[20.8px] font-[600] rounded-[5.2px] text-[13.52px] leading-[18.2px] bg-[#EDF2F7] flex items-center justify-center w-[84.24px] h-[46.8px]">
            Log Out
          </button>
        </div>
        <div className="service-selected-part mt-[26px] ">
          <h3 className="text-left font-[700] text-[20.8px] leading-[28.08px]">
            Selected service
          </h3>
          <div className="user-auth-part mt-[20.8px] w-[338px] h-[124.8px] border-solid border rounded-[10.4px] border-[#D3DEE9] flex items-center px-[19.24px] py-[20.28px]">
            <img
              className="w-[62.4px] h-[62.4px] rounded-[6.24px]"
              src={selectedService.image}
              alt=""
            />

            <div className="ml-[13.52px] flex flex-col">
              <p className="text-[15.6px] leading-[21.32px] text-left font-[600] mb-[6.24px]">
                {selectedService.name}
              </p>
              <div className="text-[10.4px] leading-[14.04px] text-left  text-[#718096] font-[500] flex mb-[6.24px]">
                <CalendarIcon className="w-[15px] h-[15px]" />
                <p className="ml-[7.28px]">{selectedService.date}</p>
              </div>
              <div className="text-[10.4px] leading-[14.04px] text-left  text-[#718096] font-[500] flex mb-[6.24px]">
                <LocationIcon className="w-[15px] h-[15px]" />
                <p className="ml-[7.28px]">{selectedService.place}</p>
              </div>
              <span className="text-[15.6px] leading-[21.32px] text-left font-[600] text-black ">
                Rp {selectedService.price}
              </span>
            </div>
          </div>
        </div>
        <div className="location-part mt-[20.8px] ">
          <p className="text-left font-[600] text-[15.6px] leading-[21.32px]">
            Enter your location
          </p>
          <input
            type="text"
            placeholder="Enter address"
            className="w-[338px] h-[52px] border-solid border rounded-[10.4px] border-[#D3DEE9] mt-[10.4px] px-[14.56px] placeholder:text-[15.6px] placeholder:text-[#D3DEE9] text-[15.6px]"
          />
        </div>
        <div className="location-part mt-[20.8px] ">
          <p className="text-left font-[600] text-[15.6px] leading-[21.32px]">
            Note (optional)
          </p>
          <input
            type="text"
            placeholder="Enter text here"
            className="w-[338px] h-[52px] border-solid border rounded-[10.4px] border-[#D3DEE9] mt-[10.4px] px-[14.56px] placeholder:text-[15.6px] placeholder:text-[#D3DEE9] text-[15.6px]"
          />
        </div>
        <div className="payment-part mt-[26px] ">
          <h3 className="text-left font-[700] text-[26px] leading-[35px]">
            Choose a way to pay
          </h3>
          <div className="payment-methods mt-[26px] flex flex-wrap justify-between ">
            {paymentMethods.map((item, index) => {
              return (
                <button
                  class={`${
                    currentMethod === index
                      ? "bg-[#FFFFFF]  border-solid border  border-[#262626]"
                      : "bg-[#EDF2F7]"
                  } rounded-[5px] mb-[10px] text-[13.52px] leading-[18.2px] flex items-center justify-center w-[163.8px] h-[52px]`}
                  onClick={() => setCurrentMethod(index)}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <form className="payment-check flex mt-[15.6px]">
            <div className="relative">
              <input type="checkbox" class="absolute w-[15.6px] h-[15.6px] " />
              <CheckBox class="absolute pointer-events-none	w-[15.6px] h-[15.6px] " />
            </div>
            <label className="text-[13.52px] leading-[18.2px] text-[#718096] font-[500] text-left ml-[28.6px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              <span className="underline text-[#1E21FF] ml-1">do eiusmod</span>
            </label>
          </form>
        </div>
      </div>
      <div className="checkout-part flex justify-between h-[83.2px] items-baseline px-[26px] py-[15.6px] mt-[55.64px] border-solid border-t-2  border-[#D3DEE9]">
        <p className="block text-[15.6px] text-left">Previous</p>
        <button class="text-white rounded-[5.2px] text-[13.52px] leading-[18.2px] bg-[#1E21FF] flex items-center justify-center w-[124.8px] h-[52px]">
          Next
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
