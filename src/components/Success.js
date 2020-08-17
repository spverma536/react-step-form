import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Success extends Component {

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
                <AppBar title="Success" />
                <h1>Thanks {firstName}, for your time. </h1>
                <p>Work is under progress and soon it will be integrated with backend.</p>
            </MuiThemeProvider>
        )
    }
}

const Styles = {
    button: {
        margin: 15
    }
}

export default Success
