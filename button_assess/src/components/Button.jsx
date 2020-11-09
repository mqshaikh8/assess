
function Button(props) {
    const handleClick = () => {
        props.clickFunc()
    }

    const style = {
        height: '90px',
        width: '90px',
        marginLeft: '10px',
        borderRadius: '30px',
    }
  return (
      <button onClick={() => handleClick()} style={style} type ='button'>{props.text}</button>
  );
}

export default Button;
