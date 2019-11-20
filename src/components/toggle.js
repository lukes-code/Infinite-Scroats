import React, { Component } from 'react'

export default class toggle extends Component {

state = {
    on: false,
}

toggle = () => {
    setTimeout(() => {
        var element = document.getElementById("Goats");
        element.scrollIntoView({behavior: "smooth"});
      }, 1);
    this.setState({
        on: !this.state.on
    })
}

    render() {
        return (
            <React.Fragment>
                {this.state.on && this.props.children}
                {!this.state.on ? <button className="btn-primary" onClick={this.toggle}>Show me the goats</button> : null}
            </React.Fragment>
        )
    }
}