
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "화장실 휴지",
      amount: 13000,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "새 TV", amount: 880000, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "자동차보험",
      amount: 22000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "새 책상 (목재)",
      amount: 350000,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
