import { Link, Route, Routes } from "react-router-dom"


function ProductCard(props) {

    const sendDataToParentToBeDeleted = () => {
        props.sendDataToParentToBeDeleted(props.product)
    }

    return (
        <div className="card" >
            <img src={props.product.thumbnail} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">{props.product.description}</p>
                <Link to={"/product-detail/" + props.product.id} className="btn btn-primary">Details</Link>
                <button className="btn btn-danger" onClick={sendDataToParentToBeDeleted}>Delete</button>
            </div>
        </div>
    )
}

export default ProductCard