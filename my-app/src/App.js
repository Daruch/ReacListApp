import React, { Component } from 'react';
import data from './data';
import Search from './components/Input';
import PostList from './components/PostList';
import MoreButton from './components/MoreButton';



class App extends Component {

  constructor(props){
    super(props);
    this.data = data;
    this.state = {
      count: 10, 
      items: this.data.slice(0, 10),
      searchTerm:" "
    }
  }



  handleChange = (e) => this.setState( {searchTerm: e.target.value} )

  onAddItems(){
    this.setState(prevState =>({
      count: prevState.count + 10,
      items: this.data.slice(0, prevState.count + 10),
    }));
 } 
  

 render() {
  const {count} = this.state;
  const {searchTerm} = this.state;
  const{items} = this. state;
  
  
  
  return(
    <div style = {listWrapper}>  
      
        <span>Count: {count}</span>
         <Search inputChange={this.handleChange} inputText = {searchTerm} />
         <PostList  items = {items} inputText = {searchTerm} />   
         <MoreButton loadMore = {()=>this.onAddItems()} />       
    </div>
    );
  }
}


const listWrapper ={
  minHeight:'100vh',
  backgroundColor:"#F2F3F5",
  width:"100%",
  display:"flex",
  flexDirection:"column",
  alignItems:"center"
}

export default App;