import React from "react"
import ReactDOM from "react-dom"
import Placeholder from "./PlaceholderComponent"
const App = ()=>{
    return(       
        <div>
            <Placeholder>
                <div className = "ui icon header">
                            <i className = "pdf file outline icon"></i>
                            No document are listed for this customer
                        </div>
                        <div className= "ui primary button">
                        Add Document
                    </div>
            </Placeholder>
            
           
            
        </div>
    );
}

ReactDOM.render(<App />,document.querySelector('#root'));