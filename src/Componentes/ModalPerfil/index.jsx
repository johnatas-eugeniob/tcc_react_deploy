import './style.css';
export default function ModalPerfil({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div className="background-style">
        <div className="modal-style">
          <div className='btn-fechar' onClick={setModalOpen}>
            &times;
          </div>
          <div>{children}</div>
        </div>
      </div>
    );
  }

  return null
}