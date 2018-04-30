import React from "react";


const PostListItem = ({item}) => {    
            return (
              <li style={listItem} key={item.id }>
                <h5 style={listTitle}>{item.title}</h5>
                <p style={listBody}>{item.body}</p>
              </li>
             )
      }
 
 
 
const listItem = {
  marginTop:'15px',
  marginRight:'10px',
  padding:"7px",
  background: "#fff",
  border: "1px solid #aaaaaa",
 };

const listTitle = {
  fontWeight: "bold",
  textAlign: "center",
  color: "#7a6f7a"
 };


const listBody = {
  color:'#6882AC',
  fontStyle: "italic",
  margin:"0px 5px 5px 5px"
}

export default PostListItem




