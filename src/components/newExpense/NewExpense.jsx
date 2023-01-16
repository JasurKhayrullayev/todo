import React from 'react'
import NewExpenseForm from './NewExpenseForm'

function NewExpense(props) {
  return (
    <>
        <NewExpenseForm onAddData={props.onAddData}/>
    </>
  )
}

export default NewExpense