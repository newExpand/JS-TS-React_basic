import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('업데이트!')
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <ExpenseAmount amount={props.amount} />
      </div>
      <button type='button' onClick={clickHandler}>
        제목 변경
      </button>
    </Card>
  );
};

export default ExpenseItem;
