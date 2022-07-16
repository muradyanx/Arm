import '../Book-Table/style.scss';
import UniversalInput from '../UniversalInput';
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react';


function BookTable(){

    const [emailinput, setemailinput] = useState('');
    const [value, setValue] = useState('');
   

    

   

    function chakemail(val) {
        
        let regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$$/;
          return regEmail.test(val);
        
    }

    return(
        <div className='g-flex-direction g-align-center g-justify-around book-blok'id='book'>
            <p className='g-text-center book-text'>BOOK A TABLE</p>
          <div className='g-justify-evenly book-item'> 
           {/* {inputlist.map(el => <UniversalInput onChange={(e) => {setValue(e.target.value)}} key={el.id} input={el}/>)} */}


           <input type='email' placeholder='EMAIL' className={`book-input  ${!chakemail(emailinput) ? 'eror-input':''}`} onChange={(e) => setValue(e.target.value)} />
            <input className='book-input' type='number'placeholder='NUMBER OF GUESTS'/>
            <input className='book-input'type="time"/>
            <input className='book-input' type='date'/>

          </div>
      
         
           <button className=' book-btn' onClick={() => setemailinput(value)}>FIND TABLE</button>
         
        </div>
    )
}

export default BookTable