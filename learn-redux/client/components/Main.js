import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
    <div>
      <h1>
        <Link to="/">Reduxtagram</Link>
        {this.props.children}
      </h1>
    </div>  );
  }
}

export default Main;