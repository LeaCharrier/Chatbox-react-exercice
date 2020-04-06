import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        message: '',
        length: this.props.length,
    }

    createMessage = () => {
        const { addMessage, pseudo, length } = this.props
        const message = {
            pseudo,
            message: this.state.message
        }

        addMessage(message)

        // RESET
        this.setState({
            message: '',
            length
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }

    handleChange = event => {
        const message = event.target.value
        const lengthMessage = message.length
        const length = this.props.length - lengthMessage
        this.setState({
            message,
            length
         })
    }

    handleKeyUp = event => {
        if(event.key === 'Enter') {
            this.createMessage()
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <textarea
                    required
                    maxLength="150"
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    value={this.state.message}
                />
                <div className="info">
                    {this.state.length}
                </div>
                <button type="submit">
                    Envoyer
                </button>
            </form>
        )
    }
}
