import styled from 'styled-components'

export const Bachground = styled.div`
  background-color: #223a5f;
  background-size: cover;
  width: 100vw;
  font-family: Bree Serif;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 30px;
  min-height: 500px;
  padding-bottom: 20px;
`

export const ScoreBg = styled.div`
  border-color: white;
  border-style: solid;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Heading = styled.h3`
  color: ${props => (props.dark ? '#223a5f' : 'white')};
  height: 13px;
`
export const Score = styled.h1`
  color: #223a5f;
  height: 15px;
`
export const Li = styled.li`
  list-style: none;
`
export const Image = styled.img`
  border-radius: 100px;
  height: 100px;
  width: 100px;
  margin: 10px;
`

export const ScoreCard = styled.div`
  background-color: white;
  color: black;
  width: 100px;
  border-radius: 5px;
  text-align: center;
  padding-bottom: 10px;
`

export const Button = styled.button`
  border-radius: 100px;
  border-style: none;
  background-color: transparent;
  margin: 20px;
`

export const RPSBtns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
export const RulesBtnCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 30px;
`

export const RulesBtn = styled.button`
  background-color: white;
  border-style: none;
  padding: 5px;
  margin-top: 50px;
  height: 25px;
  border-radius: 10px;
  font-weight: bold;
  width: 70px;
`
export const RulesBgCard = styled.div`
  background-color: white;
  padding: 20px;
  width: 250px;
  height: 250px;
  text-align: center;
  margin-left: 300px;
  margin-top: 30px;
`

export const RulesImg = styled.img`
  height: 200px;
  width: 200px;
`
