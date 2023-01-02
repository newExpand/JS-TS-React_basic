import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>21.03.28</div>
      <div className="expense-item__description">
        <h2>자동차보험</h2>
        <div className="expense-item__price">가격</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
