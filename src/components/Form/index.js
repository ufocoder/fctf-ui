import React, { Component } from 'react';
import ApiService from '../../services/Api';

import './styles.css';

const TIMEOUT = 1000;

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            rejected: false
        };

        this.clearKey = this.clearKey.bind(this);
        this.rejectKey = this.rejectKey.bind(this);
        this.approveKey = this.approveKey.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    clearKey() {
        this.setState({
            rejected: false
        });
    }

    rejectKey() {
        this.setState({
            rejected: true,
            key: '',
        }, () => {
            setTimeout(this.clearKey, TIMEOUT);
        });
    }

    approveKey() {
        this.setState({
            rejected: false,
            key: '',
        }, () => {
            setTimeout(this.clearKey, TIMEOUT);
        });
    }

    handleSubmit (e) {
        const { planet, onApproved } = this.props;
        const { key } = this.state;

        ApiService
            .approveKey(planet, key)
            .then(isApproved => {
                if (isApproved) {
                    if (onApproved) {
                        onApproved(planet, key);
                        this.approveKey();
                    }
                } else {
                    this.rejectKey();
                }
            });

        e.preventDefault();
    }

    handleChange(e) {
        this.setState({
            key: e.target.value
        });
    }

    render() {
        if (this.props.planet.isColonized) {
            return (
                <div className='form form--colonized'>
                    <div className="form__title">
                        Launch panel
                    </div> 
                    <div className="form__description">
                        Yeah, planet is colonized!
                    </div>
                </div>
            )
        }

        const { key, rejected } = this.state;
        const formClassNames = `form ${rejected ? 'form--rejected' : ''}`;

        return (
            <div className={formClassNames} >
                <div className="form__title">
                    Launch panel
                </div>
                <div className="form__description">
                    We are ready to start colonization
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder="Enter the code"
                        className="form__input" 
                        type="text" 
                        value={key} 
                        autoFocus={true}
                        onChange={this.handleChange} />
                    <button className="form__button" type="submit">Start!</button>
                </form>
            </div>
        )
    }
}

export default Form;
