import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Button, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const styles = {
    button: {
        margin: 10,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: 'solid #78909c 1px',
        borderRadius: '10px',
        margin: 10,
        padding: 10,
        boxShadow: '3px 3px 20px',
        width: '80vw',
        maxWidth: 350,
    },
    textField: {
        width: '80%',
        maxWidth: 300,
        margin: 10,
    },
};


class FormLogin extends Component {

    state = {
        email: '',
        password: '',
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };


    render() {
        const { classes } = this.props
        const { email, password } = this.state
        
        return (
            <form className={classes.container}>

            <p>O Entrez vos identifiants O</p>

                <TextField
                    id="input-email"
                    className={classes.textField}
                    label="Email"
                    value={email}
                    onChange={this.handleChange('email')}
                    variant="outlined"
                />

                <TextField
                    id="input-password"
                    className={classes.textField}
                    label="Password"
                    value={password}
                    onChange={this.handleChange('password')}
                    variant="outlined"
                    type={this.state.showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                >
                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                   >
                    Connexion
                </Button>

            </form>
        )
    }
}

FormLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormLogin)

