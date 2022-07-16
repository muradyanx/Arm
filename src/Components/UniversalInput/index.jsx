import '../UniversalInput/style.scss';

function UniversalInput(props){
    let input = props.input
    return(
        <input type={input.type} className='book-input' placeholder={input.placeholder} />
    )
}

export default UniversalInput