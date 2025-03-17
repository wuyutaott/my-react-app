import React, {useState} from "react";

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comments, setComments] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentsChange(event) {
        setComments(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comments} onChange={handleCommentsChange} placeholder="Enter delivery instructions"/>
            <p>Comments: {comments}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={
                    shipping === "Pick Up"
                } onChange={handleShippingChange}/>
                Pick Up
            </label>

            <label>
                <input type="radio" value="Delivery" checked={
                    shipping === "Delivery"
                } onChange={handleShippingChange}/>
                Delivery
            </label>

            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent;