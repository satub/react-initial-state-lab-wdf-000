const React = require('react');

class Bomb extends React.Component {
    constructor(props){
      super();

      this.state = {
        secondsLeft: props.initialCount
      };
    }
    render(){
      let snl = this.state.secondsLeft;
      return <p>{snl > 0 ? `${snl} seconds left before I go boom!` : 'Boom!'}</p>
    }
}

module.exports = Bomb
