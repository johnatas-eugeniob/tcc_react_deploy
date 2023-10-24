import Header from '../../Componentes/Header'
import Carrossel from '../../Componentes/Carrossel'
import Sobre from '../../Componentes/Sobre'
import Seletor from '../../Componentes/Seletor'
import ComoFunciona from '../../Componentes/ComoFunciona'
import Parceiros from '../../Componentes/Parceiros'
import Rodape from '../../Componentes/Rodape'
import MenuOculto from '../../Componentes/MenuOculto'
import '../../App.css'

function Home() {
  return (
    <>
      <MenuOculto/>
      <Header/>
      <Carrossel></Carrossel>
      <Sobre/>
      <Seletor/>
      <ComoFunciona/>
      <Parceiros/>
      <Rodape/>
    </>
  )
}
export default Home
