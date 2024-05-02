type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: 'btn_black'
}

const Button = ({type, title, variant}: ButtonProps) => {
  return (
    <button type={type}> 
    <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button