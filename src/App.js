import React from 'react';
import './App.css';
import LetterGrid from './components/LetterGrid';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: 'John',
      playing: false,
      goodAnswers: [],
      showResult: false
    }
  }

  handleNewGoodAnswer = (letter, keyItem) => {
    const { goodAnswers } = this.state
    const tempTab = [...goodAnswers]
    tempTab[keyItem] = letter
    this.setState({ goodAnswers: tempTab }, () => {
      const { goodAnswers } = this.state
      setTimeout(() => {
        if (goodAnswers.includes('_') === false) {
          this.setState({ showResult: true })
        }
      }, 1000)
    })

  }

  onClick = () => {
    const initTab = []
    this.state.firstname.split('').map(() => initTab.push('_'))
    this.setState({ playing: true, goodAnswers: initTab }, () => alert('La partie commence !'))
  }

  render() {
    const { firstname, playing, goodAnswers, showResult } = this.state
    return (
      <div className="App">
        {
          !playing ?
            <>
              <h1>Le prénom a trouvé est</h1>
              <input placeholder={'Saisir un prénom'} value={firstname} onChange={event => this.setState({ firstname: event.target.value })} />
              <button disabled={firstname.length === 0 ? true : false} onClick={this.onClick}>Valider</button>
            </>
            :
            showResult ?
              <div>
                <h1>VOUS AVEZ GAGNE</h1>
                <button onClick={() => this.setState({
                  firstname: '',
                  playing: false,
                  goodAnswers: []
                })}>Nouvelle partie</button>
              </div>
              : <>
                <h1>Quel est mon prénom ?</h1>
                <div style={{ display: 'flex', justifyContent: 'center', margin: 20 }}>
                  {
                    this.state.firstname.split('').map((letter, key) => <h2 key={key}>{goodAnswers[key]}</h2>)
                  }
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  {
                    this.state.firstname.split('').map((letter, key) => <LetterGrid key={key} keyItem={key} correctLetter={letter} getGoodAnswer={this.handleNewGoodAnswer} />)
                  }
                </div>
              </>
        }
      </div>
    );
  }
}
