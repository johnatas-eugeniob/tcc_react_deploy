import './style.css'
export default function ModalPerfilOng({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div className="background-style-ong">
        <div className="modal-style-ong">
          <div className='btn-fechar-ong' onClick={setModalOpen}>
            &times;
          </div>
          <div>{children}</div>
          <button onClick={setModalOpen}>Fechar</button>
        </div>
      </div>
    )
  }

  return null
}




  // position: 'fixed',
  // top: 0,
  // left: 0,
  // right: 0,
  // bottom: 0,
  // backgroundColor: 'rgba(0, 0, 0, .7)',
  // zIndex: 1000