import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {

    constructor(props){
        super(props);

        //binding this to the CreateExercise class
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }
    //state creates variables in react

    componentDidMount(){ //react lifestyle method
        //auto called right before data is displayed on screen
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }

    onChangeUsername(e){
        //this.state.username = 'Randy' you don't want to change state this way
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e){
        //this.state.username = 'Randy' you don't want to change state this way
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e){
        //this.state.username = 'Randy' you don't want to change state this way
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date){
        //this.state.username = 'Randy' you don't want to change state this way
        this.setState({
            date: date
        });
    }

    onSubmit(e){
       
        e.preventDefault(); // prevents normal html form
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date

        }

        console.log(exercise);
        window.location = '/'; // goes back to list of exercises
    }


    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user) { //.map returns for elements in the array
                                    return <option
                                    key={user}
                                    value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.durarrion}
                        onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}