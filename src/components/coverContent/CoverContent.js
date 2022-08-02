import React from 'react';
import './coverContent.css';

const CoverContent = () => {
  return (
    <div className="cover-content">
        <div className='row'>
            <div className='col-6 '>
                <h1>Annapurna Base Camp</h1>
                <p>Get the most scenic and iconic helicopter ride from Gorakshep to Lukla in this after trekking to the base camp of the world’s tallest mountain.</p>
                <a href="#" >Learn More</a>
            </div>
            <div className='col-3 for-span'>
                <span className='greencolor'>Go on 22 days trip for</span>
                <div>USD 1,9019</div>
                <input type='button' value="INQUIRE NOW" className=' btn bg-primary' />  
                </div>

            <div className='col-3 last for-span'>
                <div><i class="fa-solid fa-mountain"></i> 3050m/18225feet</div>
                <div>  <i class="fa-brands fa-hive"></i>Strenous   </div>
            </div>
        </div>
    </div>
  )
}

export default CoverContent;