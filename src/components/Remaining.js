import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, expense) => {
        return total + expense.cost;
    }, 0);

    const remaining = budget - totalExpenses;

    // Optional: Change color based on the remaining budget
    const alertType = remaining < 0 ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{remaining}</span>
        </div>
    );
};

export default Remaining;

