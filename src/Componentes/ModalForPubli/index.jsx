import './style.css';
export default function ModalForPubli({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div className="background-style-publi-update">
        <div className="modal-style-publi-update">
          <div className='btn-fechar-publi-update' onClick={setModalOpen}>
            &times;
          </div>
          <div>{children}</div>
        </div>
      </div>
    );
  }

  return null
}