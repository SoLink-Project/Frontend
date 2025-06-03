import Index from './index';
import Banner from './banner'
import Terms from './terms';
import Policy from './policy';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/" element={<Index />} />
        <Route path="/:dynamicLink" element={<Banner />} />
      </Routes>
    </Router>
  )
}

export default App
