import React, { Component } from 'react';

class TransactionForm extends Component {
    state = {
        ...this.returnStateObject
    }

    returnStateObject(){
        if(this.props.currentIndex == -1)
        return{
            bAccountNo: '',
            iFCS: '',
            bName: '',
            amount: ''
        }
        else
        return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps){
        if (prevProps.currentIndex != this.props.currentIndex || 
            prevProps.list.length != this.props.list.length)
        this.setState({...this.returnStateObject})
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }
    
    render() {
        return (
           <form onSubmit= {this.handleSubmit} autoComplete='off'>
               <input name='bAccountNo' placeholder='A/C No.' value={this.state.bAccountNo} onChange={this.handleInputChange} /><br/>
               <input name='iFCS' placeholder='iFCS Code' value={this.state.iFCS} onChange={this.handleInputChange} /><br/>
               <input name='bName' placeholder='A/C Holder Name' value={this.state.bName} onChange={this.handleInputChange} /><br/>
               <input name='amount' placeholder='Amount' value={this.state.amount} onChange={this.handleInputChange} /><br/>
               <button name='submit'>Submit</button>



           </form>
        );
    }
}

export default TransactionForm;