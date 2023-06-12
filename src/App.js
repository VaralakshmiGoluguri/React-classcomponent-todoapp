import React, { Component } from "react";
import Navbar from "./components/Navbar";
export default class App extends Component {
  intialTodos = [
    { id: 1, action: "Buy chocolate", status: false, user_id: "VARU" },
    { id: 2, action: "Go to Temple", status: false, user_id: "VARU" },
    { id: 3, action: "Go for a Walk", status: false, user_id: "VARU" },
    { id: 4, action: "Practice React", status: false, user_id: "VARU" },
    { id: 5, action: "5", status: false },
    { id: 6, action: "6", status: false },
    { id: 7, action: "7", status: false },
    { id: 8, action: "8", status: false },
    { id: 9, action: "9", status: false },
    { id: 10, action: "10", status: false },
    { id: 11, action: "11", status: false },
    { id: 12, action: "12", status: false },
    { id: 13, action: "13", status: false },
    { id: 14, action: "14", status: false },
    { id: 15, action: "15", status: false },
  ];
  constructor(props) {
    super(props);

    this.state = {
      name: "Varu",
      todoItems: this.intialTodos.slice(0, 7),
      newItem: "",
    };
  }
  addNewItem = (event) => {
    this.setState({ newItem: event.target.value });
  };
  toggle = () => {
    this.state.name === "Varu"
      ? this.setState({
          name: "Lakshmi",
          todoItems: this.intialTodos.slice(7, 14),
          newItem: "",
        })
      : this.setState({
          name: "Varu",
          todoItems: this.intialTodos.slice(0, 7),
          newItem: "",
        });
  };

  handleChangeStatus = (e, selectedItem) => {
    this.state.todoItems.forEach((ele) => {
      if (selectedItem.id === ele.id) {
        ele.status = !ele.status;
      }
    });

    this.setState({
      ...this.state,
      todoItems: this.state.todoItems,
    });
  };

  render() {
    return (
      <div>
        <Navbar name={this.state.name} />
        <table>
          <tr>
            <th>Action</th>
            <th>Status</th>
          </tr>
          {this.state.todoItems.map((item, index) => (
            <tr key={item.id}>
              <td>{item.action}</td>
              <td>
                <input
                  type="checkbox"
                  checked={item.status}
                  onChange={(e) => this.handleChangeStatus(e, item)}
                ></input>
              </td>
            </tr>
          ))}
        </table>
        <input
          type="text"
          name="newItem"
          value={this.state.newItem}
          onChange={this.addNewItem}
        />
        {/* <input type="text" name="newItem" value={this.state.newItem} onChange={(event)=>this.setState({newItem:event.target.value})}/> */}
        <button
          onClick={() =>
            this.setState({
              todoItems: [
                ...this.state.todoItems,
                { action: this.state.newItem, status: false },
              ],
              newItem: "",
            })
          }
        >
          Add
        </button>
        <button onClick={this.toggle}>
          See {this.state.name === "Varu" ? "Lakshmi" : "Varu"}
        </button>
      </div>
    );
  }
}
