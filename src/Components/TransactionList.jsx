import React, { Component } from 'react';
import TransactionForm from './TransactionForm';

class TransactionList extends Component {
  state = {
    currentIndex: -1,
    list: this.returnList()
  }

  returnList() {
    if (localStorage.getItem('transactiona') == null)
      localStorage.setItem('transactiona', JSON.stringify([]))
    return JSON.parse(localStorage.getItem('transactiona'))
  }

  onAddOrEdit = (data) => {
    var list = this.returnList()
    if (this.state.currentIndex == -1)
      list.push(data)
    else
      list[this.state.currentIndex] = data
    localStorage.setItem('transactiona', JSON.stringify(list))
    this.setState({ list })

  }

  handleEdit = index => {
    this.setState({
      currentIndex: index

    })
  }


  render() {
    return (
      <div>
        <TransactionForm
          onAddOrEdit={this.onAddOrEdit}
          currentIndex={this.state.currentIndex}
          list={this.state.list}

        />
        <hr />

        <table>
          <tbody>
            {
              this.state.list.map((item, index) => {
                return <tr key={index}>
                  <td> {item.bAccountNo} </td>
                  <td> {item.bName} </td>
                  <td> {item.amount} </td>
                  <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default TransactionList;