import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Time } from "./Time";
import axios from "axios";

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [dateofapp, setdate] = useState("");
  const [monthofapp, setMonth] = useState("");
  const [timings, setTimings] = useState(Time);
  const [borId, setBorId] = useState(-1);
  const [bgId, setBgId] = useState(-1);
  const [activeBtn, setActiveBtn] = useState(false);

  useEffect(() => {
    // Function to display dates and days for a time period of 30 days starting from today
    const displayDatesAndDays = (startDate, days) => {
      let calendarData = [];
      let currentDate = new Date(startDate);

      for (let day = 1; day <= days; day++) {
        calendarData.push({
          date: currentDate.getDate(),
          day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
            currentDate.getDay()
          ],
          month: new Intl.DateTimeFormat("en-US", { month: "long" }).format(
            currentDate
          ),
        });

        currentDate.setDate(currentDate.getDate() + 1);
      }

      setCalendar(calendarData);
    };

    // Display dates and days for the next 30 days starting from today
    const today = new Date();
    displayDatesAndDays(today, 30);
  }, []);

  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 3, // Display three items per slide
    slidesToScroll: 3, // Scroll three items at a time
  };

  const handleTimings = async () => {
    try {
      console.log(dateofapp);
      console.log(monthofapp);
      var temp = Time;
      for (var i = 0; i <= 7; i++) {
        var timeofapp = temp[i].name;
        const { data } = await axios.post(
          "http://localhost:8000/api/v1/doc/verify",
          {
            dateofapp,
            timeofapp,
            monthofapp,
          }
        );
        console.log(data);
        if (data?.success) {
          temp[i].isBooked = true;
        }
      }
      setTimings(temp);
      console.log(timings);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (dateofapp && monthofapp) handleTimings();
  }, [dateofapp, monthofapp,timings,borId]);

  const handleDateMonth = async (d, m, i) => {
    setdate(d);
    setMonth(m);
    setBorId(i);
    setBgId(-1);
    setTimings(Time);
    // handleTimings();
  };

  const handletemp = (i) => {
    setActiveBtn(true);
    setBgId(i);
  };

  return (
    <>
      <div style={{ paddingTop: "15px" }}>
        <Slider {...settings}>
          {calendar.map((day, index) => (
            <div
              className="text-center"
              style={{ backgroundColor: "white" }}
              onClick={() => handleDateMonth(day.date, day.month, index)}
            >
              <p style={{ margin: "0", padding: "0" }}>
                {day.day}, {day.date} {day.month.substring(0, 3)}
              </p>
              {index === borId ? (
                <p
                  style={{
                    margin: "0",
                    padding: "0",
                    color: "green",
                    borderBottom: "2px solid green",
                  }}
                >
                  8 slots available
                </p>
              ) : (
                <p style={{ margin: "0", padding: "0", color: "green" }}>
                  8 slots available
                </p>
              )}
            </div>
          ))}
        </Slider>
      </div>
      <hr style={{ marginTop: "0" }} />
      <div className="row" style={{ padding: "2rem" }}>
        {timings.map((time, index) => (
          <div className="col-lg-4 text-center timings-div">
            
            {time.isBooked ? (
              <div
                className="timings-sub-div disabled"
                style={{ backgroundColor: "gray", cursor: "default" }}
              >
                {time.name}
              </div>
            ) : (
              <>
                {index === bgId ? (
                  <div
                    className="timings-sub-div"
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    {time.name}
                  </div>
                ) : (
                  <div
                    className="timings-sub-div"
                    onClick={() => handletemp(index)}
                  >
                    {time.name}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <div className="final-button">
        {activeBtn ? (
          <button className="btn btn-primary">CONTINUE</button>
        ) : (
          <button className="btn btn-primary disabled">CONTINUE</button>
        )}
      </div>
    </>
  );
};

export default Calendar;
