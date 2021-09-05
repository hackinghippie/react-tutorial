import React from "react"

function BodyComponent (props) {
    return(
        <div>
            <div id="facts-container"> {/*output error or loading announcement*/}
                {props.error && <div className="fact-div" ><h3 className="loading">
                {props.error}</h3></div>}
                {props.renderAllFacts}
            </div>
        </div>    
    )
}

export default BodyComponent