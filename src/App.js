import './App.css';
import Expenses from './components/Expenses/Expenses';

function App() {
  const data =[
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
    
  return (
    <>
      <div className='expense'>
          <Expenses expenses={data}/>
      </div>
    </>
  )
}

export default App;
