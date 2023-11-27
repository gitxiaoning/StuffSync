import './Storage.scss';
import { daysPassed, nameFormat } from '../../util/formatter';

const Storage = ({ item }) => {

    if (item.boxsize === "small"){
        return (
            <li className='box-small'>
                <span className='box-small__icon'>{item.icon}</span>
                <span className='box-small__text'>{daysPassed(item["timestamp_added"]) + " Days Already"} </span>
            </li>
        );
    } 

    else if (item.boxsize === "medium"){
        return (
            <li className='box-medium'>
                <span className='box-medium__icon'>{item.icon}</span>
                <span className="box-medium__name">{nameFormat(item.name)}</span>
                <span className='box-medium__text'>{daysPassed(item["timestamp_added"]) + " Days Already"} </span>
            </li>
        );
    }

    else if (item.boxsize === "long"){
        
        return (
            <li className='box-long'>
                <div className='box-long__info'>
                    <span className='box-long__icon'>{item.icon}</span>
                    <span className="box-long__name">{nameFormat(item.name)}</span>
                    <span className='box-long__text'>{daysPassed(item["timestamp_added"]) + " Days Already"} </span>
                </div>

                <div className='box-long__location'>
                    <span className='box-long__location-at'>At:</span>
                    <br></br>
                    <span className='box-long__location'>{item.location}</span>
                    <br></br>
                    <span className='box-long__location-at'>Count:</span>
                    <br></br>
                    <span className='box-long__location'>{item.quantity}</span>
                </div>
                
            </li>
        );
    }


    
};
  
export default Storage;
