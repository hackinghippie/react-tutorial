import React from "react"
import { Link } from "react-router-dom"


function Paging(props) {

    const apiPaging = props.state.apiPaging
    const apiPagingSliced = apiPaging.slice(1, -1) //slice out previous and next page
    
    const renderPageNumbers = apiPagingSliced.map((links, index ) => {
        return <Link key={index} to={`/page/${links.label}`}>
                    <button key={index} id={links.label} 
                    className={(links.active ? "mark-page" : "") + " " + (links.url === null ? "remove-btn" : "")}
                    onClick={props.handleClick}
                    >{links.label}
                    </button>
                </Link>
        }
    )

    return (
        <div  id="paging"> 
            <div id = "page-nums"> 
                {renderPageNumbers}
            </div>
            <div id="move-btns">
                <Link to={`/page/${props.currentPage - 1}`}>
                <button id="back-btn" 
                className={props.currentPage === 1 ? "hide" : " "} 
                onClick = {() => props.data.moveClick(-1)}><p>Back</p>
                </button>
                </Link>
                <button id="randomize" 
                onClick={props.data.randomize}><p>Randomize Facts</p>
                </button>
                <Link to={`/page/${props.currentPage + 1}`}>
                <button id="next-btn"
                className={props.lastPage === props.currentPage ? "hide" : " " }
                onClick = {()=> props.data.moveClick(1)}><p>Next</p>
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Paging; 
