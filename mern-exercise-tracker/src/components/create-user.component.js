import React, { Component } from 'react';

export default class CreateUser extends Component {

    constructor(props){
        super(props);

        //binding this to the CreateExercise class
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        }
    }
    //state creates variables in react

    onChangeUsername(e){
        //this.state.username = 'Randy' you don't want to change state this way
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e){
       
        e.preventDefault(); // prevents normal html form
        const user = {
            username: this.state.username,

        }

        console.log(user);

        this.setState({
            username: ''
        })
            
        
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}