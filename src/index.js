import React from "react"
import ReactDOM from "react-dom"
import CommentDetails from "./CommentDetails"
import ApprovalCards from "./ApprovalCard"
const App = ()=>{
    return (
      <div className="ui container comments">     
      <ApprovalCards>
       <CommentDetails author = "Compunder " submitedAt = "Today at 6:00 PM" comment = "Lal ful neela ful, munna bhaiya beautiful"/>
      </ApprovalCards>
      <ApprovalCards>
       <CommentDetails author = "Guudu Bhaiya" submitedAt = "Yesterdat at 4:00 AM" comment = " Mirzapur ki g***d faad ke rkh deng"/>
       </ApprovalCards>
       <ApprovalCards>
       <CommentDetails author = "Lodu Lalit" submitedAt = "Today at 2:00 PM" comment = "Bhaiya ye Fulchand Tripathi bhut chutiyon wala nam hai"/>
       </ApprovalCards>
       <ApprovalCards>
       <CommentDetails author = "Muuna Bhaita" submitedAt = "Yesterday at 3:00 PM" comment = "Sweety Love hai hamra"/>
       </ApprovalCards>
       <ApprovalCards>
       <CommentDetails author = "Kaleen Bhaiya " submitedAt = "2 Days ago at 1:00  PM" comment = "Risk hai" />
       </ApprovalCards>
       <ApprovalCards>
       <CommentDetails author = "Bauji" submitedAt = "Just Now" comment = "Tum tel lagao"/> 
       </ApprovalCards>
      </div>      
    );
}

ReactDOM.render(<App/>,document.querySelector('#root'))