import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';


/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' },
        
        
      ]
    
    };
   
  }

    // functions to add new items to the shopping cart
   addApples = () => {
    this.setState({items: [...this.state.items,{id: 5, value:"Apples", qty: 4, unit:"pcs"}] }); 
  }
    addOranges= () => {
      this.setState({items: [...this.state.items,{id: 5, value:"Oranges", qty: 7, unit:"pcs"}] });
    }
      addBeer= () => {
        this.setState({items: [...this.state.items,{id: 5, value:"Beer", qty: 5, unit:"ltr"}] });
      }
        addCarrots= () => {
          this.setState({items: [...this.state.items,{id: 5, value:"Carrots", qty: 10, unit:"pcs"}] });
      
    
  }
 addProducts=(productDescription, quantity)=> {
   return() => {
const searchResult= this.state.items.findIndex((element, index,array)=> {
if (element.value===productDescription) {
  return true;
} 
else 
{
  return false;
   } 
  });

  if(searchResult !== -1) {
    console.log("success, element with index" +searchResult +"is matching")
    let newItems =[...this.state.items];
    newItems[searchResult].qty += quantity;
    this.setState({items:newItems});
  }
  else
  {
    console.log("No milk:/");
    this.setState({items:[...this.state.items,{id:this.state.items.length + 1,
    value: productDescription, qty:quantity}]});
  }
}
}

 

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <div>
      <button onClick={this.addProducts("Apples", 5)}>Add Apples</button>
      <button onClick={this.addProducts("Oranges",2)}>Add Oranges</button>
      <button onClick={this.addProducts("Beer", 3)}>Add Beer</button>
      <button onClick={this.addProducts("Carrots", 6)}>Add Carrots</button>
      </div>
    </div>
  }
}

export default App;