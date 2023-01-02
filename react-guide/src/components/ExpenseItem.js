import "./ExpenseItem.css";

function ExpenseItem(props) {
    const year = props.date.getFullYear(),
    month = props.date.toLocaleString('ko-KR', {month: 'short'}),
    day = props.date.toLocaleString('ko-KR', {day: '2-digit'});

  return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}원</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
