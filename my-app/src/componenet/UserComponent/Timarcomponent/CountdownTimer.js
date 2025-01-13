import React, { useState, useEffect, useContext } from "react";


const CountdownTimer = ({ createdAt }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endTime = new Date(
      new Date(createdAt).getTime() + 48 * 60 * 60 * 1000
    );
    const difference = endTime - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hr: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    },0.5);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        <>
          <p className={`text-center text-light`}>Auction ends in :</p>
          <table className="text-center table table-bordered text-light">
            {/* <thead
              className={`${
                theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              <tr>
                {timerComponents.map((row) => (
                  <td>{row.props.children[2]}</td>
                ))}
                {/* <td>Day</td>
                <td>Hr</td>
                <td>Min</td>
                <td>Sec</td> 
              </tr>
            </thead> */}
            <tbody
            >
              <tr>
                {timerComponents.map((row) => (
                  <td>{row}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p className={`text-center text-danger`}>Auction Closed</p>
      )}
    </div>
  );
};

export default CountdownTimer;
