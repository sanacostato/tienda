 import PaypalCheckoutButton from "../components/PaypalCheckoutButton";
 const Checkout = () => {
     return ( 
         <div className="row">
             <div className="col-12">
                 <PaypalCheckoutButton currency={"USD"} amount={1} showSpinner={false}/>
             </div>
         </div>
     );
 }
 
 export default Checkout;