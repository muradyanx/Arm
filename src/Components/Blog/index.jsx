import { useState, useEffect } from 'react';
import '../Blog/style.scss';
import Product from '../Product';
// import Product from './../Product/index';


function Blog(){



const  products = [
    {
        id:1,
        name:'Reiciendis Laborum',
        sum:'$5',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex.',
        category:'food',
        img:'/img/blog-1.jpg'
    },
    {
        id:2,
        name:'Adipisci Totam',
        sum:'$12',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex.',
        category:'food',
        img:'/img/blog-2.jpg'
    },
    {
        id:3,
        name:'Dicta Deserunt',
        sum:'$8',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex.',
        category:'food',
        img:'/img/blog-3.jpg'
    },
    {
        id:4,
        name:'Consectetur Adipisicing Elit',
        sum:'$15',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex.',
        category:'juices',
        img:'/img/blog-4.jpg'
    },
    {
        id:5,
        name:'Ullam Laboriosam',
        sum:'$15',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex.',
        category:'juices',
        img:'/img/blog-5.jpg'
    },
    {
        id:6,
        name:' Fugit Ipsam',
        sum:'$15',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident illum officiis fugit laudantium voluptatem sit iste delectus qui ex.',
        category:'juices',
        img:'/img/blog-6.jpg'
    },
]
const [product, setProduct] = useState([]);
const [item, setItem] = useState('');
const [btnFood, setBtnFood] = useState('brown');
const [btnJuice, setBtnJuice] = useState('#343a40');
 

const getProducts = (item) => {
    const product = products.filter(el =>  el.category === item);   
    setProduct(product); 
    setItem(item);

    if(item === 'food'){
        setBtnFood('brown');
        setBtnJuice('#343a40')
    }else if(item === 'juices'){
        setBtnFood('#343a40');
        setBtnJuice('brown')
    }
}

useEffect(() => {
    getProducts('food')
},[])




    return(
        <section className="blog-blok" id='blog'>  
        
            <div className='g-flex-direction g-justify-center blog-title'>
                <p className='g-text-center blog-name'>EVENTS AT THE FOOD HUT</p>
                <div className='g-justifi-align-center blog-btn'>
                    <button style={{backgroundColor: btnFood}} className='g-justifi-align-center blog-button' onClick={() => getProducts('food')}>Foods</button>
                    <button style={{backgroundColor: btnJuice}} className='g-justifi-align-center blog-button' onClick={() => getProducts('juices')}>Juices</button>
 
                </div>
            </div>
            <div className='g-justify-evenly g-wrap blog-product' >
          
                
                {product.map(key => <Product key={key.id} product={key}/>)}
               
            </div>

        </section>
    )
}

export default Blog