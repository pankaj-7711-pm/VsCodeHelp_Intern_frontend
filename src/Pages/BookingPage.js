import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import validator from "validator";
import { useDetails } from "../Context/details";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [rotp, setRotp] = useState();
  const [otp, setOtp] = useState();
  const [det, setDet] = useDetails();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Check if the new email is valid
    setIsValid(validator.isEmail(newEmail));
  };

  const handleOtp = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/doc/sendotp",
        { email }
      );
      setRotp(data?.temp);

      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApp = async () => {
    try {
      const date = det.dateofapp;
      const time = det.selectedTime;
      const month = det.monthofapp;
      console.log(email);
      console.log(date);
      console.log(time);
        console.log(month);
        console.log(otp);
        console.log(rotp)
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/doc/register",
        { email, date, time, month,otp,rotp}
      );
      console.log(data);
      if (data?.success) {
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="main-div-booking">
        <div className="sub-main-booking">
          <h2>Hello user!</h2>
          <label>Enter your Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {!isValid && <p style={{ color: "red" }}>Invalid email address</p>}
          {isValid ? (
            <button
              className="btn btn-primary mt-2 "
              onClick={() => handleOtp()}
            >
              Generate Otp
            </button>
          ) : (
            <button className="btn btn-secondary mt-2 disabled">
              Generate Otp
            </button>
          )}
          {show && (
            <>
              <p style={{ color: "green" }}>Otp sent to email Successfully</p>
              <input
                type="text"
                placeholder="Enter Otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button className="btn btn-secondary mt-2" onClick={() => handleApp()}>Submit</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BookingPage;
