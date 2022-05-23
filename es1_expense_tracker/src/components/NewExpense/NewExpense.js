import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditig, setIsEditig] = useState(false);

  const startEditingHandler = () => {
    setIsEditig(true);
  };

  const stopEditingHandler = () => {
    setIsEditig(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditig(false)
  };

  return (
    <div className="new-expense">
      {!isEditig && (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}

      {isEditig && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
