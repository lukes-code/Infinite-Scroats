import React, { Component } from 'react'

export default class toggle extends Component {

state = {
    toggle: false,
}

toggle = () => {
    setTimeout(() => {
        var element = document.getElementById("Goats");
        element.scrollIntoView({behavior: "smooth"});
      }, 1);
    this.setState({
        toggle: !this.state.toggle
    })
}

    render() {
        return (
            <React.Fragment>
                {this.state.toggle && this.props.children}
                {!this.state.toggle ? <button className="btn-primary" onClick={this.toggle}>Show me the goats</button> : null}
            </React.Fragment>
        )
    }
}