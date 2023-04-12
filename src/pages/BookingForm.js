import { ReactComponent as IconClose } from "../assets/icons/icon_close.svg";
import { ReactComponent as CalendarIcon } from "../assets/icons/icon_calendar.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/icon_location.svg";
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
    <div className="booking_form-page w-[750px] h-[1995px] bg-white">
      <div className="booking_form-page--header bg-neutral-800 text-white flex h-[218px]  px-[50px] font-[700] py-[34px]">
        <p className="block text-5xl text-left leading-[68px]">
          Choose the form of payment
        </p>
        <IconClose className="mr-[6px] mt-[18px]" />
      </div>
      <div className="booking_form-page--content p-[50px] pb-0">
        <div className="user-auth-part w-[650px] bg-[#F7FAFC] h-[164px] border-solid border rounded-[20px] border-[#D3DEE9] flex items-center px-[37px] py-[39px]">
          <span className="user-auth-char px-[38px] py-[11px] w-[90px] h-[90px] rounded-full bg-[#EDF2F7]  font-bold uppercase text-[40px] leading-[54px]">
            {Array.from(user.name)[0]}
          </span>
          <div className="user-auth-info ml-[26px] flex flex-col mt-[-12px]">
            <p className="text-[40px] leading-[54px] text-left font-[600] mb-[4px]">
              {user.name}
            </p>
            <span className="text-[26px] min-w-[250px] leading-[35px] text-[#718096] font-[500] text-left">
              {user.phone_number}
            </span>
          </div>
          <button class="ml-[40px] font-[600] rounded-[10px] text-[26px] leading-[35px] bg-[#EDF2F7] flex items-center justify-center w-[162px] h-[90px]">
            Log Out
          </button>
        </div>
        <div className="service-selected-part mt-[50px] ">
          <h3 className="text-left font-[700] text-[40px] leading-[54px]">
            Selected service
          </h3>
          <div className="user-auth-part mt-[40px] w-[650px] h-[240px] border-solid border rounded-[20px] border-[#D3DEE9] flex items-center px-[37px] py-[39px]">
            <img
              className="w-[120px] h-[120px] rounded-[12px]"
              src={selectedService.image}
              alt=""
            />

            <div className="ml-[26px] flex flex-col">
              <p className="text-[30px] leading-[41px] text-left font-[600] mb-[12px]">
                {selectedService.name}
              </p>
              <div className="text-[20px] leading-[27px] text-left  text-[#718096] font-[500] flex mb-[12px]">
                <CalendarIcon />
                <p className="ml-[14px]">{selectedService.date}</p>
              </div>
              <div className="text-[20px] leading-[27px] text-left  text-[#718096] font-[500] flex mb-[12px]">
                <LocationIcon />
                <p className="ml-[14px]">{selectedService.place}</p>
              </div>
              <span className="text-[30px] leading-[41px] text-left font-[600] text-black ">
                Rp {selectedService.price}
              </span>
            </div>
          </div>
        </div>
        <div className="location-part mt-[40px] ">
          <p className="text-left font-[600] text-[30px] leading-[41px]">
            Enter your location
          </p>
          <input
            type="text"
            placeholder="Enter address"
            className="w-[650px] h-[100px] border-solid border rounded-[20px] border-[#D3DEE9] mt-[20px] px-[28px] placeholder:text-[30px] placeholder:text-[#D3DEE9] text-[30px]"
          />
        </div>
        <div className="location-part mt-[40px] ">
          <p className="text-left font-[600] text-[30px] leading-[41px]">
            Note (optional)
          </p>
          <input
            type="text"
            placeholder="Enter text here"
            className="w-[650px] h-[100px] border-solid border rounded-[20px] border-[#D3DEE9] mt-[20px] px-[28px] placeholder:text-[30px] placeholder:text-[#D3DEE9] text-[30px]"
          />
        </div>
        <div className="payment-part mt-[50px] ">
          <h3 className="text-left font-[700] text-[50px] leading-[68px]">
            Choose a way to pay
          </h3>
          <div className="payment-methods mt-[50px] flex flex-wrap justify-between ">
            {paymentMethods.map((item, index) => {
              return (
                <button
                  class={`${
                    currentMethod === index
                      ? "bg-[#FFFFFF]  border-solid border  border-[#262626]"
                      : "bg-[#EDF2F7]"
                  } rounded-[10px] mb-[20px] text-[26px] leading-[35px] flex items-center justify-center w-[315px] h-[100px]`}
                  onClick={() => setCurrentMethod(index)}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <form className="payment-check flex mt-[30px]">
            <input type="checkbox" class="outline-2	w-[46px] h-[30px] " />
            <label className="text-[26px] leading-[35px] text-[#718096] font-[500] text-left ml-[25px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              <span className="underline text-[#1E21FF] ml-1">do eiusmod</span>
            </label>
          </form>
        </div>
      </div>
      <div className="checkout-part flex justify-between h-[160px] items-baseline px-[50px] py-[30px] mt-[107px] border-solid border-t-2  border-[#D3DEE9]">
        <p className="block text-[30px] text-left">Previous</p>
        <button class="text-white rounded-[10px] text-[26px] leading-[35px] bg-[#1E21FF] flex items-center justify-center w-[240px] h-[100px]">
          Next
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
