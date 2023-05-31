import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const [costs, setCosts] = useState([{
    id: 'c1',
    date: new Date(2021, 2, 5),
    description: 'холодильники',
    amount: 9.89
  }, {
    id: 'c2',
    date: new Date(2021, 9, 6),
    description: 'стиралка',
    amount: 999.89
  },
  {
    id: 'c3',
    date: new Date(2023, 2, 2),
    description: 'ерунда',
    amount: 99.89
  }]);
  const addCostHandler = (cost) => {
    // setCosts([...costs, cost]);
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }


  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
  // return React.createElement('div', {},
  //   React.createElement('h1', {}, 'Изучай!!!'),
  //   React.createElement(Costs, { costs: costs })
  // );
}

export default App;
