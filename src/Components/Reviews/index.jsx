import '../Reviews/style.scss';
import User from '../User';
function Reviews(){

let users = [
    {
        id:1,
        name:'John Doe',
        position:'Web Designer',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!'

    },
    {
        id:2,
        name:'Steve Thomas',
        position:'UX/UI Designer',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!'

    },
    {
        id:3,
        name:'Miranda Joy',
        position:'Graphic Designer',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum nobis eligendi, quaerat accusamus ipsum sequi dignissimos consequuntur blanditiis natus. Aperiam!'

    },
]

    return(
        <section className='reviews-blok' id='reviews'>
            <p className='g-text-center reviews-title'>REVIEWS</p>
            <div className='g-justify-evenly reviews-users'>
               {users.map(el => <User  key={el.id} user={el}/>)}
            </div>




        </section>
    )
}

export default Reviews