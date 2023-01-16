import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';
import { useState } from 'react';

const fakeData =[
  {
    id: 'a1',
    title: 'Toilet paper',
    price: '99.9',
    date: {
      year: '2019',
      month:'August',
      day:'29',
    }
  },
  {
    id: 'a2',
    title: 'New television',
    price: '89.9',
    date: {
      year: '2019',
      month:'August',
      day:'29',
    }
  },
  {
    id: 'a3',
    title: 'Water mashine',
    price: '79.9',
    date: {
      year: '2019',
      month:'August',
      day:'29',
    }
  },
  {
    id: 'a4',
    title: 'New paper',
    price: '69.9',
    date: {
      year: '2019',
      month:'August',
      day:'29',
    }
  },
]


function App() {
  
  

  const [fake_data , setFake_data] = useState(fakeData);
  const addData = (data) => {
    setFake_data((prev)=>{
      return[data, ...prev]
    })
  };
    
  

  return (
    <>
      <NewExpense onAddData={addData}/>
      <div className='expense'> 
          <Expenses expenses={fake_data}/>
      </div>
    </>
  )
}

export default App;
