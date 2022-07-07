import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class LoginForm extends Form {
    state = {
        data: { username: '', password: ''},
        errors: {}
    }

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    }
    // username = React.createRef();

    doSubmit = () => {
        console.log("Submitted");
    }

    render() { 
        
        return (
            <React.Fragment>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {/* <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input value={data.username} onChange={this.handleChange} name="username" autoFocus id="username" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={data.password} onChange={this.handleChange} name="password" id="password" type="text" className="form-control" />
                    </div> */}

                    { this.renderInput('username', 'Username') }
                    { this.renderInput('password', 'Password', 'password') }
                    { this.renderButton('Login') }
                </form>
            </React.Fragment>
        );
    }
}
 
export default LoginForm;