import { useState } from "react";

function ExpenseItem ({title="Toilet paper", price="99.5", data}){
    const [custumTitle, setCustomTitle] = useState({title,price});
    const changer = (e) =>{
        setCustomTitle({
            title:'Updated',
            price:'0.00',
        })
    };

    return(
        <>
            <div className="expense-item">
                <div className="item-data">
                    <p className="data-month">August</p>
                    <p className="data-year">2021</p>
                    <p className="data-day">15</p>
                </div>
                <div className="item-info">
                    <h2 className="item-title">{custumTitle.title}</h2>
                    <p className="item-price">${custumTitle.price}</p>
                </div>
                <button onClick={changer} className="item-btn">change</button>
            </div>
        </>
    )
}
export default ExpenseItem;