// import React from "react";
import { Component } from "react";
import UserContext from "../utils/userCOntext";

export class UserClass extends Component {
    constructor(props) {
        super(props);
        this.state= {
            count: 1,
            count: 2
        }
    }
    componentDidMount() {
        console.log('hello mount');
    }
    render() {
        return <div>
            <h2>{this.props.name}</h2>
            <h2>Age: 22</h2>
            <div>LoggedIn User: <UserContext.Consumer>
                {(data)=> {
                    console.log(data.loggedInUser);
                }}
                </UserContext.Consumer></div>
            <h2>WOrk: None</h2>
            <h1>Count: {this.state.count}</h1>
            <button style={{ width: "100px" }} onClick={() => {
                this.setState({
                    count: this.state.count + 1
                })
            }} >Increment</button>
        </div>  
    }
}