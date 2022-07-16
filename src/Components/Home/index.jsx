import '../Home/style.scss';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';




function Home(){
    const [item, setitem] = useState('nav-none');
    const [change,setchange] = useState('nav-content-none-secnd')




    
    return(
        <section className='g-background-img home-blok'>
        
         <nav className='g-justify-evenly g-align-center nav-blok' >
            
            
           
            <div className={`g-cursor-pointer ${item}`} 
                 onClick={()=>{
                        setitem('nav-none-secnd');
                        setchange('nav-content-none')
                }}></div>
            <div className={`  ${change}`}>
                <div className='content-icon g-cursor-pointer'onClick={()=>{
                    setchange('nav-content-none-secnd')
                    setitem('nav-none');

                }} ></div>
                <div className='g-flex-direction none-contenier'>
                   <HashLink smooth={true} to='/#' > <span className='lists-font-none'>Home</span></HashLink>
                   <HashLink smooth={true} to='/#about' > <span className='lists-font-none'>About</span></HashLink>
                  <HashLink smooth={true} to='/#gallery'>  <span className='lists-font-none'>Gallery</span></HashLink>
                  <HashLink smooth={true} to='/#book'>  <span className='lists-font-none'>Book-Table</span></HashLink>
                  <HashLink smooth={true} to='/#blog'>    <span className='lists-font-none'>Blog</span></HashLink>
                 <HashLink smooth={true} to='/#reviews'>   <span className='lists-font-none'>Reviews</span></HashLink>
                <HashLink smooth={true} to='/#contact'>    <span className='lists-font-none'>Contact Us</span></HashLink>
                </div>

            </div>
           
           
                <div className='g-justify-evenly g-align-center nav-left-list'>
                   <HashLink smooth={true} to='/#' > <span className='lists-font'>Home</span></HashLink>
                   <HashLink smooth={true} to='/#about' > <span className='lists-font'>About</span></HashLink>
                  <HashLink smooth={true} to='/#gallery'>  <span className='lists-font'>Gallery</span></HashLink>
                  <HashLink smooth={true} to='/#book'>  <span className='lists-font'>Book-Table</span></HashLink>
                </div>
                <div className='nav-logo'>Food Hut</div>
                <div className='g-justify-evenly g-align-center nav-right-list'>
                <HashLink smooth={true} to='/#blog'>    <span className='lists-font'>Blog</span></HashLink>
                 <HashLink smooth={true} to='/#reviews'>   <span className='lists-font'>Reviews</span></HashLink>
                <HashLink smooth={true} to='/#contact'>    <span className='lists-font'>Contact Us</span></HashLink>
                </div>

            </nav>
           
            <div className='container'>
           


       



            <div className='g-flex-direction g-justifi-align-center  home-title'>
                <h1 className='g-text-center home-food'>Food Hut</h1>
                <h2 className='g-text-center home-fresh'>Always fresh & Delightful</h2>
                <HashLink className='hash' smooth={true} to='/#' ><button className='g-justifi-align-center home-btn'>view our gallery</button></HashLink>
            </div>
            </div>
        </section>
    )
}

export default Home