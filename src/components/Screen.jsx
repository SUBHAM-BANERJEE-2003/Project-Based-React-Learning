import '../css/Screen.css'

const Screen = ({ value }) => {
    return (
        <input className='screen' value={ value } readOnly />
    );
}

export default Screen;
