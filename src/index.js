import React from "react"
import ReactDOM from "react-dom"
import CommentDetails from "./CommentDetails"
const App = ()=>{
    return (
      <div className="ui container comments">        
       <CommentDetails author = "Compunder " submitedAt = "Today at 6:00 PM" comment = "Lal ful neela ful, munna bhaiya beautiful"/>
       <CommentDetails author = "Guudu Bhaiya" submitedAt = "Yesterdat at 4:00 AM" comment = " Mirzapur ki g***d faad ke rkh deng"/>
       <CommentDetails author = "Lodu Lalit" submitedAt = "Today at 2:00 PM" comment = "Bhaiya ye Fulchand Tripathi bhut chutiyon wala nam hai"/>
       <CommentDetails author = "Muuna Bhaita" submitedAt = "Yesterday at 3:00 PM" comment = "Sweety Love hai hamra"/>
       <CommentDetails author = "Kaleen Bhaiya " submitedAt = "2 Days ago at 1:00  PM" comment = "Risk hai" />
       <CommentDetails author = "Bauji" submitedAt = "Just Now" comment = "Tum tel lagao"/> 
      </div>      
    );
}

ReactDOM.render(<App/>,document.querySelector('#root'))