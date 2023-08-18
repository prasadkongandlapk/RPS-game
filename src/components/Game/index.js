import {Component} from 'react'

import {
  Bachground,
  Button,
  RPSBtns,
  RulesBgCard,
  ScoreBg,
  Score,
  Li,
  RulesImg,
  RulesBtnCard,
  Image,
  Heading,
  ScoreCard,
  RulesBtn,
} from './styledComponents'

class Game extends Component {
  state = {num: 0, score: 0, showRules: false}

  onClickBtn = () => {
    this.setState({num: Math.floor(Math.random() * 3)})
  }

  onRules = () => {
    this.setState(prevState => ({showRules: !prevState.showRules}))
  }

  showBtns = () => {
    const {choicesList} = this.props
    return (
      <ul>
        <RPSBtns>
          {choicesList.map(each => (
            <Li>
              <Button onClick={this.onClickBtn} type="button">
                <Image src={each.imageUrl} alt="RPS" />
              </Button>
            </Li>
          ))}
        </RPSBtns>
      </ul>
    )
  }

  renderResult = () => {
    const {showRules} = this.state

    switch (showRules) {
      case true:
        return this.showRules()

      default:
        return null
    }
  }

  render() {
    const {choicesList} = this.props
    const {num, score, showRules} = this.state
    return (
      <Bachground>
        <ScoreBg>
          <div>
            <Heading>Rock</Heading>
            <Heading>Paper</Heading>
            <Heading>Scissors</Heading>
          </div>
          <ScoreCard>
            <Heading dark>Score</Heading>
            <Score dark>{score}</Score>
          </ScoreCard>
        </ScoreBg>
        {showRules ? (
          <RulesBgCard>
            <RulesImg
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
              alt="rules"
            />
          </RulesBgCard>
        ) : (
          <ul>
            <RPSBtns>
              {choicesList.map(each => (
                <Li>
                  <Button onClick={this.onClickBtn} type="button">
                    <Image src={each.imageUrl} alt="RPS" />
                  </Button>
                </Li>
              ))}
            </RPSBtns>
          </ul>
        )}
        <RulesBtnCard>
          <RulesBtn type="button" onClick={this.onRules}>
            Rules
          </RulesBtn>
        </RulesBtnCard>
      </Bachground>
    )
  }
}

export default Game
