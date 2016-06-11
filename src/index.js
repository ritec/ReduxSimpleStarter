import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDO1GyF4lnIgdh4cF5XuCSAAB307HRUkmo';
// Create a new component
//compoenne should produce HTML

const App = () => {
  return (
    <div>
    <SearchBar />
  </div>
  );
}
//Take this compoenent's html and put it on the page.

ReactDOM.render(<App />, document.querySelector('.container'));