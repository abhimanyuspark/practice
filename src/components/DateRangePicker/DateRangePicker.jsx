import React from "react";
// import "./DatePicker.css";
import dayjs from "dayjs";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const DateRangePicker = ({ onChange, value }) => {
  const rangePresets = [
    { label: "Today", value: [dayjs(), dayjs()] },
    { label: "Last 30 Days", value: [dayjs().add(-29, "d"), dayjs()] },
    {
      label: "This Month",
      value: [dayjs().startOf("month"), dayjs().endOf("month")],
    },
    {
      label: "Last Month",
      value: [
        dayjs().subtract(1, "month").startOf("month"),
        dayjs().subtract(1, "month").endOf("month"),
      ],
    },
    { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] },
    { label: "Last 6 Months", value: [dayjs().subtract(6, "months"), dayjs()] },
    { label: "Last 1 Year", value: [dayjs().subtract(1, "years"), dayjs()] },
  ];

  const onRangeChange = (dates, dateStrings) => {
    if (dates) {
      //   console.log('From: ', dates[0], ', to: ', dates[1]);
      //   console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
      //   console.log("From:" , From , "To:", To)
      let From = new Date(dateStrings[0]);
      let To = new Date(dateStrings[1]);
      onChange(From, To, dates, dateStrings);
    } else {
      console.log("Clear");
    }
  };

  return (
    <>
      <RangePicker
        value={value}
        presets={rangePresets}
        onChange={onRangeChange}
        separator="To"
        // bordered={false}
        suffixIcon={false}
        className="custom_class"
      />
    </>
  );
};

export default DateRangePicker;
