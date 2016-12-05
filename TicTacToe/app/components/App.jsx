const React = require('react');
const ReactDOM = require('react-dom');
const Game = require('./Game.jsx');
class App extends React.Component {
  constructor(props) {
    super(props);
  }
}

ReactDOM.render((
		<Game/>
	), document.body);