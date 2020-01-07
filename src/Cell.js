import React from 'react'
// import Matrix from './Matrix'

class Cell extends React.Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    listenForClick = (event) => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
        <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.listenForClick}>
        <h1>{this.state.color}</h1>
        </div>
        )
    }
}

export default Cell