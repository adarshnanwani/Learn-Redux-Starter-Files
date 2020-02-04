import React, { Component, cloneElement } from 'react';
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
        </h1>
        {cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
