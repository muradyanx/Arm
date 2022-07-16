import '../User/style.scss';
function User(props){
    let user = props.user

    return(
        <div className='user-blok'>
            <div className='user-info'>
                <p className='g-text-center user-name'>{user.name}</p>
                <p className='g-text-center user-position'>{user.position}</p>
                
            </div>
            <div className='g-justifi-align-center user-text'>
                <p className='user-text-p'>{user.text}</p>
            </div>
        </div>
    )
}

export default User