import React, {useState} from 'react';
import Navbar from "./components/navbar";
import Counters from "./components/counters";

const App = () => {
  const initialState = [
    {value: 0, id: 1, name: 'Ложка'},
    {value: 4, id: 2, name: 'Вилка'},
    {value: 0, id: 3, name: 'Тарелка'},
    {value: 0, id: 4, name: 'Стартовый набор минималиста'},
    {value: 0, id: 5, name: 'Ненужные вещи'},
  ]
  const [counters, setCounters] = useState(initialState)
  const handleDelete = (counterId) => setCounters(counters.filter(counter => counter.id !== counterId))

  const handleIncrement = (counterId) => {
    const countersClone = [...counters]
    const currentCounter = countersClone.find((counter => counter.id === counterId))
    currentCounter.value++
    setCounters(countersClone)
  }

  const handleDecrement = (counterId) => {
    const countersClone = [...counters]
    const currentCounter = countersClone.find((counter => counter.id === counterId))
    if (currentCounter.value > 0) {
      currentCounter.value--
      setCounters(countersClone)
    }
  }
  const handleReset = () => setCounters(initialState)

  return (
      <div className="col-lg-8 mx-auto p-3 py-md-5">
        <main>
          <Navbar totalItems={counters.reduce((acc, item) => acc + item.value, 0)} />
          <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onDelete={handleDelete}
          counters={counters}
          />
        </main>
      </div>
  );
};

export default App;
