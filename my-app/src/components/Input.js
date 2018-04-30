import React from "react";




class Search extends React.Component{
    constructor(props){
        super(props);
    
    }

    render(){
        console.log(this.props.inputChange)
        console.log(this.props.inputText)
        return(
            <input style = {inputSearch}
                   type = "text"
                   placeholder = "search"
                   value={this.props.textInput} 
                   onChange={this.props.inputChange}
                 />   
        )}
    }



    const inputSearch = {
         marginTop:'5px',
         padding:"15px",
         width:"650px",
         background:"white"         
    }

export default Search;