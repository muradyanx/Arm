import '../FoodImg/style.scss'
import { HashLink } from 'react-router-hash-link';
function FoodImg(props){
    let food = props.food
    return(
        <div className="g-background-img food-photo" style={{backgroundImage:`url('${food.img}')`}} >
          <HashLink className='hash' to='/#' smooth={true}>  <div className='plus'> + </div></HashLink>
        </div>
    )
}

export default FoodImg