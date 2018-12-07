import React,{Component} from 'react';
import deliveryIcon from '../../../../assets/ic-home-delivery.svg';
import collectionPointIcon from '../../../../assets/payCollect.svg';
import './deliveryPoint.css'

export default class DeliveryPoint extends Component{
    renderActiveButton(){
      return(
        <div className="activeRadio">
        </div>
      )
    }

    render(){
      return(
      <div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-xs-6 col-lg-6 tabDiv activeDiv">
           <div className="radio inlineEl selectedRadio">
             {this.renderActiveButton()}
           </div>
           <div className="imageEl inlineEl">
             <img src={deliveryIcon} alt="deliveryIcon" />
           </div>
           <div className="Text inlineEl">
            <p className="boldText">Delivery</p>
            <p>Ship my order to my delivery address</p>
           </div>
          </div>
          <div className="col-sm-6 col-md-6 col-xs-6 col-lg-6 tabDiv">
          <div className="radio inlineEl">
           </div>
           <div className="imageEl inlineEl">
            <img src={collectionPointIcon} alt="collectionPointIcon" />
           </div>
           <div className="Text inlineEl">
            <p className="boldText">Click & Collect</p>
            <p>Receive my order from the closest pick-up location. I’ll pick it up myself.</p>
           </div>
          </div>
        </div>
      </div>)
    }
}