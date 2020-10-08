import React from 'react';
import Letter from '../Letter';

export default class LetterGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }

    render() {
        const { correctLetter, getGoodAnswer, keyItem } = this.props;
        return (
            <div style={{ border: "4px solid #000", padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ul>
                    {
                        this.alphabet.map((letter, key) => {
                            return (
                                <Letter key={key} keyItem={keyItem} letter={letter.toUpperCase()} correctLetter={correctLetter.toUpperCase()} getGoodAnswer={getGoodAnswer} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}