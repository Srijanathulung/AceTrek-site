import React from 'react';
import './trip.css';

const Trip = () => {
  return (
    <div className='trip-item_wrapper'>
        <div className='row'>
            <div className='col-6'>
                <div className='first-trip_item'>fIRST iTEM</div>
            </div>
            <div className='col-6'><div className='second-trip_item'>second iTEM</div></div>

        </div>

{/* divided trip item in 2 rows */}
        <div className='row'>
        <div className='col-6'><div className='third-trip_item'>third iTEM</div></div>
            <div className='col-6'><div className='fourth-trip_item'>fourth iTEM</div></div>
        </div>
    </div>
  )
}

export default Trip