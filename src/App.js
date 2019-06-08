import React from 'react';
import './App.css';

const Product = ({ name, index, votes, onVote }) => {

  const plus = () => {
    onVote('up', index)
  };
  const minus = () => {
    onVote('down', index)
  };
  return (
    <li>
      <span>{name}</span> - <span>votes: {votes}</span>
      <button onClick={plus}>+</button>{" "}
      <button onClick={minus}>-</button>
    </li>
  );
};

class GroceryApp extends React.Component {

  state = {
    products: [
      { name: "Oranges", votes: 0 },
      { name: "Apples", votes: 0 },
      { name: "Bananas", votes: 0 }
    ]
  }

  onVote = (dir, index) => {
    if (dir === 'up') {
      this.setState(prevState => (
        prevState.products[index].votes++
      ));
    }
    if (dir === 'down') {
      this.setState(prevState => (
        prevState.products[index].votes--
      ));
    }
  };

  render() {
    const { products } = this.state
    return (
      <ul>
        {products.map((product, index) => <Product key={index} index={index} name={product.name} votes={product.votes} onVote={this.onVote} />)}
      </ul>
    );
  }
}

function App() {
  return (<GroceryApp />)
}

export default App;
