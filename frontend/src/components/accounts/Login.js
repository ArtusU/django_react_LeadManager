import React, { Component } from 'react'
import { Link, Redirect  } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    static propTypes = {
        prop: PropTypes
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted')
    }

    onChange = (e) => this.setState({ [e.target.name ]: e.target.value })

    render() {
        const { username, password } = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                <h2 className="text-center">Login</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={this.onChange}
                            value={username}
                        />
                        </div>
                        <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.onChange}
                            value={password}
                        />
                        </div>
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                        </div>
                        <p>
                        Don't have an account? <Link to="/register">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(Login)
