import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({ id, name, cost }) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id,
        });
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {name}
            <span>
                {currency}{cost}
                {/* Button to delete the expense */}
                <button 
                    type="button" 
                    className="btn btn-danger btn-sm ml-2" 
                    onClick={handleDeleteExpense}
                >
                    &times;
                </button>
            </span>
        </li>
    );
};

export default ExpenseItem;

