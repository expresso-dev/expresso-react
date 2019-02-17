// react
import React from 'react';
import { render } from 'react-dom';
// components
import Newsbar from './components/newsbar';
import Navbar from './components/navbar';
import FixedNavbar from './components/fixedNavbar';
import Home from './components/home';
import Footer from './components/footer';
// styles
import './app.scss';

class App extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 120;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
        console.log('top');
      } else {
      	console.log(window.scrollY);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  render() {
    return (
      	<div>

		    <div style={this.state.isTop ? { display: 'none' } : { display: 'block', width: '100%', position: 'fixed', zIndex: 999 }} >
		        <FixedNavbar />
		    </div>

		  	<Newsbar />

		  	<Navbar />
		  	
		  	<Home />

		  	<Footer />

		</div>
    );
  }
} 

render(<App />, document.getElementById('app'));

module.hot.accept();
