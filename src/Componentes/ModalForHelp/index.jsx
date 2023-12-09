import './style.css';
export default function ModalForHelp({ isOpen, setModalOpenHelp, children }) {
  if (isOpen) {
    return (
      <div className="background-style-publi-help">
        <div className="modal-style-publi-help">
          <div className='btn-fechar-publi-help' onClick={setModalOpenHelp}>
            &times;
          </div>
          <div>{children}</div>
        </div>
      </div>
    );
  }

  return null
}