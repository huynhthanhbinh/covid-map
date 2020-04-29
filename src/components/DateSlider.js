import React, { Component, useState, useEffect } from "react";

import { render } from "react-dom";
import { Slider, Rail, Handles, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Tick } from "./SupportMyslider"; // example render components - source below
import { subDays, startOfToday, format } from "date-fns";
import { scaleTime } from "d3-scale";

const sliderStyle = {
  position: "relative",
  width: "100%",
};

function formatTick(ms) {
  return format(new Date(ms), "MMM dd");
}

const halfHour = 1000 * 60 * 30;
const constantDay = new Date("2019-12-8");

const DateSlider = ({ onClickSeekbar }) => {
  let interval;
  const today = startOfToday();

  const difference = today - constantDay;

  const numberday = difference / 86400000;

  const fourDaysAgo = subDays(today, numberday / 2);
  const oneWeekAgo = subDays(today, numberday);

  const [selected, setselected] = useState(fourDaysAgo);
  const [updated, setupdated] = useState(fourDaysAgo);
  const [min, setmin] = useState(oneWeekAgo);
  const [max, setmax] = useState(today);
  const [isStart, setisStart] = useState(true);

  // gia tri cua ngay ma seekbar dang point to 
  const onChange = ([ms]) => {
    setselected(new Date(ms));
    onClickSeekbar(format(selected, "yyyy-MM-dd"));
    return selected;
  };

  const onUpdate = ([ms]) => {
    setupdated(new Date(ms));

    return updated;
  };

  const startAutoUpdate = () => {
    interval = setInterval(() => {
      let tomorrow = new Date(selected);
      tomorrow.setDate(selected.getDate() + 10);
      setselected(tomorrow);
      onClickSeekbar(format(selected, "yyyy-MM-dd"));
      console.log(selected);
    }, 3000);
  };
  const stopAutoUpdate = () => {
    clearInterval(interval);
  };

  const renderDateTime = (date, header) => {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontFamily: "Arial",
          margin: 5,
        }}
      >
        <b>{header}:</b>
        <div style={{ fontSize: 12 }}>{format(date, "yyyy-MM-dd")}</div>
      </div>
    );
  };

  const dateTicks = scaleTime()
    .domain([min, max])
    .ticks(8)
    .map((d) => +d);

  const onSlideStart = (values) => {
    console.log("on slide start value");
  };

  return (
    <div style={{ margin: "2%", width: "100%" }}>
      {renderDateTime(selected, "Selected")}
      {renderDateTime(updated, "Updated")}
      <div style={{ margin: "5%", height: 120, width: "90%" }}>
        <Slider
          mode={1}
          step={halfHour}
          domain={[+min, +max]}
          rootStyle={sliderStyle}
          onUpdate={onUpdate}
          onChange={onChange}
          values={[+selected]}
          onSlideStart={onSlideStart}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div>
                {handles.map((handle) => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={[+min, +max]}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>

          <Ticks values={dateTicks}>
            {({ ticks }) => (
              <div>
                {ticks.map((tick) => (
                  <Tick
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
      </div>

      <div>
        <button onClick={startAutoUpdate}>Play</button>
        <button onClick={stopAutoUpdate}>Pause</button>
      </div>
    </div>
  );
};

export default DateSlider;
