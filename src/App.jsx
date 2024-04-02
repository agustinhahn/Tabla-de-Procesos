import DragAndDrop from './components/DragAndDrop'
import CartContext from './context/CartContext'

const App = () => {
  return (
    <>
    <CartContext>
      <DragAndDrop />
    </CartContext>
    </>
  )
}

export default App