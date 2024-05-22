import HomePage from "./Pages/HomePage"
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Projeto01 from "./Pages/Projeto01"
import Projeto02 from "./Pages/Projeto02"
import Projeto03 from "./Pages/Projeto03"
import Projeto04 from "./Pages/Projeto04"
import Projeto05 from "./Pages/Projeto05"
import Projeto06 from "./Pages/Projeto06"
import Projeto07 from "./Pages/Projeto07"
import Projeto08 from "./Pages/Projeto08"
import Projeto09 from "./Pages/Projeto09"
import Projeto10 from "./Pages/Projeto10"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/projeto01" element={<Projeto01/>}></Route>
          <Route path="/projeto02" element={<Projeto02/>}></Route>
          <Route path="/projeto03" element={<Projeto03/>}></Route>
          <Route path="/projeto04" element={<Projeto04/>}></Route>
          <Route path="/projeto05" element={<Projeto05/>}></Route>
          <Route path="/projeto06" element={<Projeto06/>}></Route>
          <Route path="/projeto07" element={<Projeto07/>}></Route>
          <Route path="/projeto08" element={<Projeto08/>}></Route>
          <Route path="/projeto09" element={<Projeto09/>}></Route>
          <Route path="/projeto10" element={<Projeto10/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
