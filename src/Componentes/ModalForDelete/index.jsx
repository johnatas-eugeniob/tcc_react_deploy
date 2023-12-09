import './style.css';
export default function ModalForDelete({ isOpen, setModalOpenDelete, children }) {
  if (isOpen) {
    return (
      <div className="background-style-publi-delete">
        <div className="modal-style-publi-delete">
          <div className='btn-fechar-publi-delete' onClick={setModalOpenDelete}>
            Não
          </div>
          <div>{children}</div>
        </div>
      </div>
    );
  }

  return null
}