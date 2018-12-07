import React,{Component} from 'react';
import AddressContainer from './addressContainer/addressContainer';
import './selectAddress.css';
import addNewIcon from '../../../../assets/icon-addnew.svg'
export default class SelectAddress extends Component{
    render(){
      return(<div className="row">
        <div className="addressHeading">
           Select Delivery Address
        </div>
        <div className="deliveryAddressContainer">
          <AddressContainer />
        </div>
        <div className="addAddressArea">
            <img className="inlineEl" src={addNewIcon} alt="add address"/>
            <div className="addAddressText inlineEl">Delivery Address</div>
        </div>
      </div>)
    }
}