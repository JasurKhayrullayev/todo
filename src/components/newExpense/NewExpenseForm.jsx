import React , {useState} from 'react'

const month = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May",
    "June", 
    "July", 
    "August", 
    "September", 
    "October",
    "November", 
    "December",
]


const NewExpenseForm = (props) => {

    const [form, setForm] = useState({
        title:"",
        price:"",
        date:"",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            title: form.title,
            price: form.price,
            date:{
                month: month[new Date(form.date).getMonth()],
                day: new Date(form.date).getDay(),
                year: new Date(form.date).getFullYear(),
            }
        }
        props.onAddData()
    };

    const getValuesFromInputs = (e) => {
        setForm( (prevValue) =>{
            return{
                ...prevValue,
                [e.target.name]:e.target.value,
            };
        });
    };



  return (
    <div className='expense-form-container'>
        <div className="expense-form">
            <form onSubmit={submitHandler}>
                <div className="expense-form">
                    <div className="expense-input">
                        <label>Title</label>
                        <input type="text" onChange={getValuesFromInputs} name="title"/>
                    </div>
                    <div className="expense-input">
                        <label>Amount</label>
                        <input type="number" onChange={getValuesFromInputs} name="price" />
                    </div>
                    <div className="expense-input">
                        <label>Date</label>
                        <input type="date" onChange={getValuesFromInputs} name="date" />
                    </div>
                </div>

                <button className='expense-input-btn' type='submit'>Add expense</button>
            </form>
        </div>
    </div>
  )
}

export default NewExpenseForm
