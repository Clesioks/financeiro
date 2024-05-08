import * as C from "./App.styles"
import { TableArea } from './components/TableArea'




const App = () => {
   

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        
        
        {/* áREA DE insderção */}
        
        
        <TableArea />

        
      </C.Body>
    </C.Container>
  )
}

export default App