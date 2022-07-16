import { GoLocation } from 'react-icons/go';
import {RiSuitcaseLine} from "react-icons/ri"
import {MdOutlineMailOutline} from "react-icons/md"

import '../Contact/style.scss';
import Info from '../Info';

function Contact(){

let list = [
    {
        id:1,
        name:'EMAIL US',
        number:'info@website.com',
    },
    {
        id:2,
        name:'CALL US',
        number:'(123) 456-7890',
    },
    {
        id:3,
        name:'FIND US',
        number:'12345 Fake ST NoWhere AB Country',
    },
]

    return(
        <div className='contact-blok' id='contact'>
            <div className='g-justify-between contact-contenier'>
                <div className='iframe'>
                <iframe className='iframesecnd' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48787.932750032494!2d44.007539124793986!3d40.15908077308046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aefd7ce8a04cb%3A0x7c9d072842f1546b!2z0JDRgNC80LDQstC40YAsINCQ0YDQvNC10L3QuNGP!5e0!3m2!1sru!2s!4v1657471917325!5m2!1sru!2s"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='contact-info g-flex-direction g-justify-evenly'>
                    <h2 className='foot-title'>FIND US</h2>
                    <p className='foot-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, laboriosam
                     doloremque odio delectus, sunt magnam laborum impedit molestiae, magni quae
                      ipsum, ullam eos! Alias suscipit impedit et, adipisci illo quam.
                    </p>
                    <div className='foot-icon'>  
                        <GoLocation className='icon' />
                        <p className='foot-information'>12345 Fake ST NoWhere, AB Country</p>
                    </div>
                    <div className='foot-icon'>
                        <RiSuitcaseLine className='icon' />
                        <p className='foot-information'> (123) 456-7890</p>
                    </div>
                    <div className='foot-icon'>
                        <MdOutlineMailOutline className='icon'/>
                        <p className='foot-information'>info@website.com</p>
                    </div>
                </div>
            </div>
            <div className='g-justify-evenly user-contact'>
               {list.map(el => <Info key={el.id} info={el}/>)}
            </div>
        </div>
    )
}

export default Contact