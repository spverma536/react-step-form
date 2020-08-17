import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        const {values: {firstName, secondName, email, occupation, city, bio}, step } = this.props;

        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Confirm" />
                    <h1>Step {step} of 3</h1>
                    <List>
                        <ListItem 
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem 
                            primaryText="Second Name"
                            secondaryText={secondName}
                        />
                        <ListItem 
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem 
                            primaryText="Occupation"
                            secondaryText={occupation}
                        />
                        <ListItem 
                            primaryText="City"
                            secondaryText={city}
                        />
                        <ListItem 
                            primaryText="Bio"
                            secondaryText={bio}
                        />
                    </List>
                    <br/>
                    <RaisedButton
                        label="Confirm & Submit"
                        primary={1}
                        style = {Styles.button}
                        onClick= {this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={0}
                        style = {Styles.button}
                        onClick= {this.back}
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

export default Confirm
