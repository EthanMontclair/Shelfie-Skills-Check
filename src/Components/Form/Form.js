import React, {Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props)
        this.state ={
            product: "Shoe",
            price: "10",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRdf_ymJ9WLJppWKOGM-7UFr4nXLCmmyhtlg&usqp=CAU",
        }
    }

    handleChange = (value) => {
        this.setState({product: value})
    }

    handleUrlChange = (value) => {
        this.setState({imgUrl: value})
    }

    handlePriceChange = (value) => {
        this.setState({price: value})
    }

    render(){
        return(
            <div className="Add">
                <h1>Add</h1>
                <div className="inputImageDisplay">
                  <img src={this.state.imgUrl}></img>
                </div>
                <div className="inputElements">
                    <h4>Product Name:</h4>
                    <input value={this.state.product} onChange={(e) => this.handleChange(e.target.value)}/>
                </div>
                <div className="inputElements">
                    <h4>Image URL:</h4>
                    <input value={this.state.imgUrl} onChange={(e) => this.handleUrlChange(e.target.value)}/>
                </div>
                <div className="inputElements">
                    <h4>Price</h4>
                    <input value={this.state.price} onChange={(e) => this.handlePriceChange(e.target.value)}/>
                </div>
                <div className="addProductButtons">
                    <button onClick={() => this.toggleAddProduct()}>Cancel</button>
                    <button onClick={() => this.addToInventory()}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form