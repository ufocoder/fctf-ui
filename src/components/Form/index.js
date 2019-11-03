import React, { Component } from 'react';

import './styles.css';

const RESET_TIMEOUT = 1000;

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: ''
        };

        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.rejected !== this.props.rejected) {
            this.setState({ rejected: true }, () => {
                this.rejectTimer = setTimeout(() => {
                    this.setState({ rejected: false })
                }, RESET_TIMEOUT);
            })
        }
    }

    componentWillUnmount() {
        if (this.rejectTimer) {
            clearTimeout(this.rejectTimer);
        }
    }

    handleSubmit (e) {
        const { planet, onSubmit } = this.props;

        e.preventDefault();

        if (typeof onSubmit === 'function') {
            onSubmit(planet.id, this.state.key)
        }
    }

    handleReset (e) {
        const { planet, onReset } = this.props;

        e.preventDefault();

        if (typeof onReset === 'function') {
            onReset(planet.id)
        }
    }

    handleChange(e) {
        this.setState({
            key: e.target.value
        });
    }

    renderForm() {
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

    renderColonized() {
        return (
            <div className='form form--colonized'>
                <div className="form__title">
                    Launch panel
                </div> 
                <div className="form__description">
                    Yeah, planet is colonized!
                </div>
                <button className="form__btn" onClick={this.handleReset}>
                    Destroy!
                </button>
                <div className="form__btn-comment">
                    and try again!
                </div>
            </div>
        )
    }

    render() {
        if (this.props.planet.isColonized) {
            return this.renderColonized()
        }

        return this.renderForm()
    }
}

export default Form;
