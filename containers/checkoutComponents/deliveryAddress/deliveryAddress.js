import React,{Component} from 'react';
import DeliveryPoint from './deliveryPoint/deliveryPoint';
import SelectAddress from './selectAddress/selectAddress';
import './deliveryAddress.css';
import CheckedImage from '../../../assets/ic-editbag-selected.png';
export default class DeliveryAddress extends Component{
    render(){
      return(
      <div>
        <DeliveryPoint />
        <SelectAddress />
        <div className="row">
         <div className="billingShippingCompSection">
           <div className="inlineEl">
             <img src={CheckedImage} alt="checkedImage"/>
           </div>
           <div className="inlineEl compText">
              Billing address is same as my selected delivery address
           </div>
         </div>
        </div>
        <div className="row">
         <div className="buttonSection">
          <button>NEXT</button>
         </div>
        </div>
      </div>  );
    }
}