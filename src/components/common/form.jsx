import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';

class Form extends Component {
    state = {  
        data: {},
        errors: {}
    };
    
    validate = () => {
        const options = {abortEarly: false};
        const { error } = Joi.validate(this.state.data, this.schema, options); 
        const errors = {};
        // for(let i=0;i<result.error.details.length;i++) {
        //     errors[result.error.details[i].path[0]] = result.error.details[i].message;
        // }
        if(!error)
            return null;
        for(let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;
        /* const errors = {};
        const { data } = this.state;
        if(data.username.trim() === "") {
            errors.username = "Username is required.";
        }
        if(data.password.trim() === "") {
            errors.password = "Password is required.";
        }
        return Object.keys(errors).length === 0 ? null : errors; */
    };

    validateProperty = ({name, value}) => {
        // if(name === "username")
        //     if(value.trim() === "") return "Username is required.";
        // if(name === "password")
        //     if(value.trim() === "") return "Password is required.";
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] }
        const { error } = Joi.validate(obj, schema); 
        return error ? error.details[0].message : null;
    };

    handleSubmit = e => {
        // const username = this.username.current.value;
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if(errors) return null;

        this.doSubmit();
    };

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage)
            errors[input.name] = errorMessage;
        else
            delete errors[input.name];

        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    renderInput(name, label, type='text') {
        const { data,errors } = this.state;
        return (
            <Input type={type} name={name} label={label} value={data[name]} error={errors[name]} onChange={this.handleChange}/>
        );
    };

    renderSelect(name, label, options) {
        const { data,errors } = this.state;
        return(
            <Select options={options} name={name} label={label} value={data[name]} error={errors[name]} onChange={this.handleChange}/>
        );
    }

    renderButton(label) {
        return (
            <button disabled={this.validate()} className="btn btn-primary">{label}</button>
        );
    };
}
 
export default Form;