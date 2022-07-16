import '../Info/style.scss';
function Info(props){
    let info = props.info
    return(
        <div className='info-blok'>
            <p className='g-text-center info-name '>{info.name}</p>
            <p className='g-text-center info-number'>{info.number}</p>

        </div>
    )
}

export default Info