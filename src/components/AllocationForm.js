import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        // Example of dispatching an ADD_EXPENSE action
        dispatch({
            type: 'ADD_EXPENSE',
            payload: { name, cost: parseFloat(cost) },
        });

        // Reset form fields
        setName('');
        setCost('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">Expense Name</label>
                <input
                    required="required"
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="cost">Cost</label>
                <input
                    required="required"
                    type="number"
                    className="form-control"
                    id="cost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Add Expense
            </button>
            {/* Add more buttons for other actions like RED_EXPENSE here */}
        </form>
    );
};

export default AllocationForm;

