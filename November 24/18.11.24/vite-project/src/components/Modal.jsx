

const Modal = ({children,isOpen,}) => {
  return (
    isOpen?<div>{children}</div> : "sorry"
  )
}

export default Modal