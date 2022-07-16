import FoodImg from '../FoodImg';
import '../Gallary/style.scss';

function Gallary(){
let foods = [
    {
        id:1,
        img:'/img/gallary-1.jpg',
    },
    {
        id:2,
        img:'/img/gallary-2.jpg'
    },
    {
        id:3,
        img:'/img/gallary-3.jpg'
    },
    {
        id:4,
        img:'/img/gallary-4.jpg'
    },
    {
        id:5,
        img:'/img/gallary-5.jpg'
    },
    {
        id:6,
        img:'/img/gallary-6.jpg'
    },
    {
        id:7,
        img:'/img/gallary-7.jpg'
    },
    {
        id:8,
        img:'/img/gallary-8.jpg'
    },
    {
        id:9,
        img:'/img/gallary-9.jpg'
    },
    {
        id:10,
        img:'/img/gallary-10.jpg'
    },
    {
        id:11,
        img:'/img/gallary-11.jpg'
    },
    {
        id:12,
        img:'/img/gallary-12.jpg'
    },
]


    return(
        <section className='gallery-blok' id='gallery'>
            <p className='g-text-center gallery-title'>OUR MENU</p>
            <div className='g-wrap food-imgs'>
               {foods.map(el => <FoodImg key={el.id} food={el}/>)}
            </div>
        </section>
    )
}

export default Gallary