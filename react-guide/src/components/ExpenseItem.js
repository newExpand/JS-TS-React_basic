import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date().toISOString(),
    expenseTitle = "자동차보험",
    expenseAmount = 22000;

  return (
    <div className='expense-item'>
      <div>{expenseDate}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>{expenseAmount}원</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
