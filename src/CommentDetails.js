import React from "react"
import Faker from "faker"
const CommentDetails = (props)=>{
    return(
        <div className="comment">
          <a href="/" className="avatar">
            <img alt = "avatar" src={Faker.image.avatar()}></img>
          </a>
          <div className="content">
            <a href = "/" className = "author">
                {props.author}
            </a>
            <div className="metadata">
              <span className="data">{props.submitedAt} </span>
            </div>
            <div className="text">{props.comment}</div>
          </div>
        </div>  
    );
};

export default CommentDetails   