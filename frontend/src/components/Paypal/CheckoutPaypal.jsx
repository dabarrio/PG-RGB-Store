import React from 'react'
import { useState } from 'react'
import Checkout from './Checkout';
import {PayPalButtons, usePayPalScriptReducer} from "@paypal/react-paypal-js";
import PaypalButton from './PaypalButton';
import { useNavigate } from 'react-router';

export default function CheckoutPaypal() {
    // const [checkout, setCheckout] = useState(false); // al ser true se va a la pagina de paypal
    const navigate = useNavigate();
  

    // let createOrder = (data, actions) => {
    //     return actions.order.create({
    //       purchase_units: [{
    //         amount: {
    //           currency_code: "USD",
    //           value: '77.44', // Can also reference a variable or function
    //           breakdown: {
    //               item_total: { // Required when including the "items" array !!!!
    //                   currency_code: "USD",
    //                   value: '77.44'
    //               }
    //           }
    //         },
    //         items: [
    //           {
    //             name: "First Product Name", /* Shows within upper-right dropdown during payment approval */
    //             description: "Optional descriptive text..", /* Item details will also be in the completed paypal.com transaction view */
    //             unit_amount: {
    //               currency_code: "USD",
    //               value: "50"
    //             },
    //             quantity: "2"
    //           },
    //         ]
    //       }]
    //     });
    //   }
      
    // let onApprove = (data, actions) => {
    //     return actions.order.capture().then(function(orderData) {
    //       // Successful capture! For dev/demo purposes:
    //       console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
    //       const transaction = orderData.purchase_units[0].payments.captures[0];
    //       alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
    //       // When ready to go live, remove the alert and show a success message within this page. For example:
    //       // const element = document.getElementById('paypal-button-container');
    //       // element.innerHTML = '<h3>Thank you for your payment!</h3>';
    //       // Or go to another URL:  actions.redirect('thank_you.html');
    //     });
    //   } 

    let handleOnClick = () => { // Login true -> paypal / login false -> redirige a login
        // console.log("ACAAAA: ",localStorage.getItem("cartProducts"))
        // if(localStorage.getItem("cartProducts").length){
        //     console.log(localStorage.getItem("cartProducts").length)
        // }
        if(localStorage.getItem("login") && localStorage.getItem("cartProducts").length > 2){
            // return setCheckout(true)
            navigate("/paypal")
        }
        else if(localStorage.getItem("login")){
            alert("No hay productos en el carrito")
            navigate("/")
        }
        else{
            alert(`No puedes comprar sin haber iniciado sesison
            
            ...redirigiendo a inicio de sesion`)
            navigate("/logIn")
        }
    }

  return (
    <div >
        <button onClick={handleOnClick}>Checkout</button>

        {/* <PayPalButtons
           style={{ layout: "vertical" }}
           createOrder={createOrder}
           onApprove = {onApprove}
         /> */}
    </div>
  )
}