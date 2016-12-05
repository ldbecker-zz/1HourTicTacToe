const React = require('react');

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curTurn: false,
      gameStr: 'xxxxxxxxx',
    };
  }



  render() {
    return (
      <div>
        <div>
          {this.state.curTurn ? 'Current Turn: Player 2' : 'Current Turn: Player 1'}
        </div>
        <div>
          {this.state.gameStr.split('').map(function(place, index) {
            if((index === 2 || index === 5)) {
              return (
                  <span>
                    [ {entry} ]<br/>
                  </span>
              )} else {
                return (
                  <span>
                    [ {entry} ]
                  </span>
                )
              }
          }, this)}
        </div>
      </div>
      );
  }
}

module.exports = Game;