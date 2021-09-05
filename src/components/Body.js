import React from "react"
import BodyComponent from "./BodyComponent"
import Paging from "./Paging"

class Body extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            allFacts: [],
            currentPage: localStorage.getItem("currentPage") || 1,
            factsPerPage: 15,
            error: null,
            apiPaging: [],
            newPageUrl: null
        }
        this.handleClick = this.handleClick.bind(this)
        this.moveClick = this.moveClick.bind(this)
        this.randomize = this.randomize.bind(this)
    }
   
    //Call to API, get facts, put them into local storage or keep previous facts if available.
    componentDidMount() {
        const currentPage = localStorage.getItem("currentPage")
        window.history.pushState(null, "", "/#/react-tutorial/page/" + (this.state.currentPage))
        
        if(localStorage.length === 0) { //if first run or deleted
            localStorage.setItem("currentPage", 1)
            this.setState({ 
            currentPage:  1,
            })

            this.fetchApi(currentPage)
 
        } else {
            this.setState({ 
                isLoading: false,
                allFacts: JSON.parse(localStorage.getItem("allFacts")) || [],
                currentPage: localStorage.getItem("currentPage") || 1,
                apiPaging: JSON.parse(localStorage.getItem("apiPaging")) || []
            })  
        }
    }

    //when page updates(back/foward) replace url with current page and fetch api
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps){
            if(prevProps.match.params.id !== this.props.match.params.id){
                const id = this.props.match.params.id
                localStorage.setItem("currentPage", id)
                this.setState ({
                    currentPage: id
                })
                this.fetchApi(id)
            }
        }
    }

    //funct to fetch API
    fetchApi(currentPage) {
        const apiLink = "https://catfact.ninja/facts?limit=15&page="
        const apiQuery = currentPage
        
        fetch (apiLink + apiQuery)
            .then(response => {
                if(!response.ok){ //throwing errors if response is not ok
                    localStorage.removeItem("currentPage")
                    localStorage.removeItem("allFacts")
                    this.setState({ 
                        allFacts:  [],
                    }) 
                    throw Error("Oh no! There was an error fetching the facts.")
                }
                return response.json()  
            })
            
            .then(response => {
                const allFactsApi = response.data
                const lastPage = response.last_page
                const apiPaging = response.links
                let currentPage = localStorage.getItem("currentPage")
                localStorage.setItem("allFacts", JSON.stringify(allFactsApi))
                localStorage.setItem("apiPaging", JSON.stringify(apiPaging))
                localStorage.setItem("currentPage", Number(currentPage))
                this.setState({
                    isLoading: false,
                    allFacts: allFactsApi,
                    currentPage: JSON.parse(localStorage.getItem("currentPage")) || 1,
                    error: null,
                    lastPage: lastPage,
                    apiPaging: apiPaging
                }) 
            })     
            .catch(err => { //catching errors
            this.setState ({
                error: err.message,
                isLoading: false,
            }) 
        })
    }
    
    //button function - for numbered pages
    handleClick(event) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        
        if(event.target.id >= 1) {
            let currentPage = Number(event.target.id)
            localStorage.setItem("currentPage", currentPage)
            this.setState ({
                currentPage: JSON.parse(localStorage.getItem("currentPage"))
            })
            this.fetchApi(currentPage)
        }
    }
    
    //button function - for back/next pages
    moveClick(parameter) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        
        let movePage = (JSON.parse(localStorage.getItem("currentPage")) + parameter)
        let currentPage = movePage
        localStorage.setItem("currentPage", movePage)
        this.setState ({
            currentPage: localStorage.getItem("currentPage")
        })
        this.fetchApi(currentPage)
    } 

    //button function - cleans up local storage and reloads the page
    randomize() { 
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        localStorage.removeItem("allFacts")
        this.fetchApi()  
    }

    render() {
        const {allFacts, currentPage, factsPerPage } = this.state
        
        //shows loading text when fetching then displays facts
        const renderAllFacts = this.state.isLoading ? 
        <div className="fact-div">
        <h3 className="loading">Please wait.<br/> The cats are disclosing their secrets.</h3>
        </div> : allFacts.map((fact, index) => { 
            return <div className="fact-div" key={index}>
            <p className="fact-num">Fact # {(index+1) + (currentPage-1) * factsPerPage}:</p>
            <p className="fact-txt">{fact.fact}</p>
            </div>
        })

        return(
            <div>
                <div>
                    <BodyComponent
                    error = {this.state.error}
                    renderAllFacts = {renderAllFacts}
                    />
                </div>
                <div>
                    <Paging 
                    data = {this}
                    currentPage = {this.state.currentPage}
                    state = {this.state}
                    lastPage = {this.state.lastPage}
                    handleClick = {this.handleClick}
                    />
                </div>
            </div>
        )
    }
}

export default Body
