import * as C from './App.styles'
import { useState, useEffect } from 'react'
import { Item } from './types/Item';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './Helpers/daterFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { categorys } from './data/categorys';
import { InputArea } from './components/InputArea/index';

const App = () => {
  const [listItems, setListItems] = useState(items);
  const [filteredListItems, setFilteredListItems] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredListItems(filterListByMonth(listItems, currentMonth))
  }, [listItems, currentMonth])

  useEffect(() => {
    let incomeValue = 0;
    let expenseValue = 0;

    for (let i in filteredListItems) {
      if (categorys[filteredListItems[i].category].expense) {
        expenseValue += filteredListItems[i].value
      } else {
        incomeValue += filteredListItems[i].value
      }

      setIncome(incomeValue);
      setExpense(expenseValue);
    }

  }, [filteredListItems])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const handleAdditem = (item: Item) => {
    let newList = [...listItems]
    newList.push(item)
    setListItems(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAdditem} />

        <TableArea list={filteredListItems} />


      </C.Body>
    </C.Container>
  )
}

export default App;