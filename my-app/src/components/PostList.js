import React from "react";
import PostListItem from "./PostListItem";
import NoItemFound from "./NoItemFound"
import data from "../data"



const PostList = (props) => {
    const filteredPosts = props.items.filter(item => {
        return item.title.includes(props.inputText);
    });
       
     return(
      <ul style = {listStyle}>  
       {filteredPosts.length !== 0 ? 
            filteredPosts.map(item =>{
            return  <PostListItem  item = {item}   key = {item.id}  />
            })
          : (
             <NoItemFound />
           )
        }
       
      </ul>
       
    );
};


const listStyle = {
  display:'flex',
  flexDirection:'column',
  width: "70%",
  listStyle:"none",
  marginTop: '20px',
  backgroundColor:"#F2F3F5"
};
  



export default PostList