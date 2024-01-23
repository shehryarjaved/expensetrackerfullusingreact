import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const year = props.date.getFullYear();

  return (
    <div className='expense-item__date'>
      <div className='month'>{month}</div>
      <div className='year'>{year}</div>
      <div className='day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
