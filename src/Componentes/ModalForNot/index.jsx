import './style.css';
export default function ModalForNot({ isOpen, setModalOpenNot, children }) {
  if (isOpen) {
    return (
      <div className="background-style-publi-not">
        <div className="modal-style-publi-not">
          <div className='btn-fechar-publi-not' onClick={setModalOpenNot}>
            &times;
          </div>
          <div>{children}</div>
        </div>
      </div>
    );
  }

  return null
}