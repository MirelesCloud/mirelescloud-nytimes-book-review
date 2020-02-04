import React, { useRef, useContext, useState, useEffect } from 'react'
import { Overlay, Dialog, CloseModal  } from './Styles'
import ReactDOM from 'react-dom';

const Context = React.createContext(null);

export function ModalProvider({children}: any) {
  const modalRef = useRef(null);
  const [context, setContext] = useState();
  

  useEffect(() => {
      setContext(modalRef.current)
  }, []);

  return (
    <div>
      <Context.Provider value={context}>{children}</Context.Provider>
      <div ref={modalRef} />
    </div>
  )
}

export function Modal({onClose, children, ...props }: any) {
  const modalNode = useContext(Context);

  return  modalNode
    ? ReactDOM.createPortal(
      <Overlay>
        <Dialog {...props}>
          <CloseModal onClick={onClose}/>
          {children}
        </Dialog>
      </Overlay>,
      modalNode
    )
    : null; 
}