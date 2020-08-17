import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

export class FormUser extends Component {

    state = {
        step: 1,
        firstName: '',
        secondName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // Go on next stage
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step : step+1
        });
    }

    // Go on previous stage
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step : step-1
        });
    }

    // Handle changes in inputs
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    render() {
        const { step, firstName, secondName, email, occupation, city, bio} = this.state;
        const values = {firstName, secondName, email, occupation, city, bio};
        if(step===1)
        {
            return (
                <FormUserDetails 
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    step = {step}
                />
            )
        }
        else if(step===2)
        {
            return (
                <FormPersonalDetails 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    step = {step}
                />
            )
        }
        else if(step===3)
        {
            return (
                <Confirm
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                    step = {step}
                />
            )
        }
        else if(step===4)
        {
            return (
                <Success 
                    values = {values}
                />
            )
        }
    }
}

export default FormUser
