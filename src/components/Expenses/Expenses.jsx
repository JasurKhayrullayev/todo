import ExpenseItem from "./ExpenseItem";
function Expenses ({expenses}){
    return (
        <>
           {
             expenses.map((item)=>(
                <ExpenseItem 
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    date={item.date}
                />


             )) 
           }
        </>
    )
}

export default Expenses;