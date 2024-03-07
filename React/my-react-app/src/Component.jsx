import React, {useState} from 'react';

function MyComponent(){
    
    const [name, setName] = useState("Guest");
    const [quanity, setQuanity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuanityChange(event){
        setQuanity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return( <div>
                <input value={name} onChange={handleNameChange}/>
                <p>Name: {name}</p>

                <input value={quanity} onChange={handleQuanityChange} type="number"/>
                <p>Quanity: {quanity}</p>

                <textarea value={comment} onChange={handleCommentChange}
                placeholder="Enter delivery instruction"/>
                <p>Comment: {comment}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p>Payment: {payment}</p>

                <label>
                    <input type="radio" value="Pick up"
                            checked={shipping === "Pick up"}
                            onChange={handleShippingChange}/>
                    Pick up
                </label><br/>
                <label>
                    <input type="radio" value="Delivery"
                            checked={shipping === "Delivery"}
                            onChange={handleShippingChange}/>
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div>);

}

export default MyComponent;