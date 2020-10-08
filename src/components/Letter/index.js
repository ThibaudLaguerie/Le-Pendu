import React from 'react';

export default class Letter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            isCorrect: false,
        }
    }

    onClick = () => {
        const { letter, correctLetter, getGoodAnswer, keyItem } = this.props
        if (correctLetter === letter) {
            getGoodAnswer(letter, keyItem)
        }
        this.setState({ clicked: true, isCorrect: correctLetter === letter ? true : false })

    }

    render() {
        const { letter } = this.props
        const { clicked, isCorrect } = this.state
        return (
            <li style={{ backgroundColor: isCorrect ? 'green' : clicked ? 'grey' : 'white' }}
                onClick={this.onClick}>
                {letter}
            </li>
        )
    }
}