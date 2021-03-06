import React, { useState, useEffect } from "react";

import { Slider, Rail, Handles, Ticks } from "react-compound-slider";
import { subDays, startOfToday, format, addDays } from "date-fns";

import DateSliderHandler from "./DateSliderHandler";
import DateSliderRail from "./DateSliderRail";
import DateSliderTick from "./DateSliderTick";

import "./DateSlider.css";

const MILLISECONDS_PER_DAY = 86400000;

const sliderStyle = {
  position: "relative",
  width: "100%",
};

function formatTick(milliseconds) {
  return (
    <div className="seekbar-element">
      {format(new Date(milliseconds), "MMM dd, yyyy")}
    </div>
  );
}

const halfDay = 1000 * 60 * 60 * 12;
const startDay = new Date("2019-12-08");
const today = startOfToday();

const DateSlider = ({ onClickSeekbar }) => {
  const endPoint = today;
  const difference = (endPoint - startDay) / MILLISECONDS_PER_DAY;
  const midPoint = subDays(endPoint, difference / 2);
  const startPoint = subDays(endPoint, difference);

  const [updated, setUpdated] = useState(midPoint);
  const [isPlay, setIsPlay] = useState(false);

  // eslint-disable-next-line
  const [min, setMin] = useState(startPoint);
  // eslint-disable-next-line
  const [max, setMax] = useState(endPoint);

  const onUpdate = ([milliseconds]) => {
    setUpdated(new Date(milliseconds));
    onClickSeekbar(format(updated, "yyyy-MM-dd"));
    return updated;
  };

  useEffect(() => {
    const timer =
      isPlay === true &&
      setInterval(() => {
        setUpdated((updated) => addDays(updated, 1));
        onClickSeekbar(format(updated, "yyyy-MM-dd"));
      }, 1000);
    return () => clearInterval(timer);
    
    // eslint-disable-next-line
  }, [updated, isPlay]);

  const renderDateTime = (date, header) => {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontFamily: "Arial",
        }}
      >
        <b>{header}:</b>
        <div style={{ fontSize: "20px" }}>{format(date, "MMM dd, yyyy")}</div>
      </div>
    );
  };

  const dateTicks = () => {
    let dateList = [];
    dateList.push(startDay);
    dateList.push(today);
    return dateList;
  };

  return (
    <div style={{ margin: "2%", width: "100%" }}>
      <div style={{ margin: "7%", height: 120, width: "80%" }}>
        <Slider
          mode={1}
          step={halfDay}
          domain={[+min, +max]}
          rootStyle={sliderStyle}
          onUpdate={onUpdate}
          onChange={onUpdate}
          values={[+updated]}
        >
          <Rail>
            {({ getRailProps }) => (
              <DateSliderRail getRailProps={getRailProps} />
            )}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div>
                {handles.map((handle) => (
                  <DateSliderHandler
                    key={handle.id}
                    handle={handle}
                    domain={[+min, +max]}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>

          <Ticks values={dateTicks()}>
            {({ ticks }) => (
              <div>
                {ticks.map((tick) => (
                  <DateSliderTick
                    key={tick.id}
                    tick={tick}
                    count={ticks.length}
                    format={formatTick}
                  />
                ))}
              </div>
            )}
          </Ticks>
        </Slider>
        <br />
        {renderDateTime(updated, "Current seekbar value")}
      </div>

      <div>
        <button onClick={() => setIsPlay(true)}>Play</button>
        <button onClick={() => setIsPlay(false)}>Pause</button>
      </div>
    </div>
  );
};

export default DateSlider;
