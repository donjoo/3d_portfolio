import {BroweserRouter} from 'react-router-dom';

import {About,Contact,Experinces,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'

function App() {

  return (
    <BroweserRouter>    
    <div className="relative z-0 bg-primary">
      <div className="bg-heroo-pattern bg-cover">
        <Navbar/>
        <Hero/>
      </div>
      3d developer
    </div>
    </BroweserRouter>

  )
}

export default App
