import React, { Component } from 'react';
import TransactionForm from './TransactionForm';

class TransactionList extends Component {
    render() {
        return (
            <div>
                <TransactionForm />
                <hr />
                <p>List of transaction</p>
            </div>
        );
    }
}

export default TransactionList;