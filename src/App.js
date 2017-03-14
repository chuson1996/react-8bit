import React, { Component } from 'react';
import Image8Bit from '../lib/react-8bit';
import Highlight from 'react-highlight';

class App extends Component {
  render() {
    const imgSrc = 'https://images.unsplash.com/photo-1487865127380-aab'
      + '78e2bf64a?dpr=2&auto=compress,format&fit=crop&w=767&h=1151&q=80&'
      + 'cs=tinysrgb&crop=';
    return (
      <div>
        <img
          style={{ width: 300 }}
          src={imgSrc}
          alt="unsplash"/>
        <Image8Bit
          style={{ width: 300 }}
          scaleFactor={5}
          src={imgSrc}
        />
        <Highlight className="javascript">
          {`import React, { Component } from 'react';
import Image8Bit from '../lib/react-8bit';

class App extends Component {
  render() {
    const imgSrc = 'https://images.unsplash.com/photo-1487865127380-aab'
      + '78e2bf64a?dpr=2&auto=compress,format&fit=crop&w=767&h=1151&q=80&'
      + 'cs=tinysrgb&crop=';
    return (
      <div>
        <img
          style={{ width: 300 }}
          src={imgSrc}
          alt="unsplash"/>
        <Image8Bit
          style={{ width: 300 }}
          scaleFactor={5}
          src={imgSrc}
        />
      </div>
    );
  }
}`}
        </Highlight>
      </div>
    );
  }
}

export default App;
