import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        //console.log(this.props.step)
        this.props.nextStep();
        //console.log(this.props.step)
    }

    

    render() {

        const {values , handleChange, step } = this.props;

        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Enter User Details" />
                    <h1>Step {step} of 3</h1>
                    <TextField 
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange = {handleChange('firstName')}
                        defaultValue = {values.firstName}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter Your Second Name"
                        floatingLabelText="Second Name"
                        onChange = {handleChange('secondName')}
                        defaultValue = {values.secondName}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter Your eMail"
                        floatingLabelText="EMail"
                        onChange = {handleChange('email')}
                        defaultValue = {values.email}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        primary={1}
                        style = {Styles.button}
                        onClick= {this.continue}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}

const Styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
