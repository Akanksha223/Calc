import { useState } from 'react'

import './App.css'
import Cal from './Cal'
function App() {
/*   const [count, setCount] = useState(0) */

  return (
    <>

      <div className="card">
{/*         <button onClick={() => setCount((count) => count + 1)}>
          count is {count} */}
          <Cal></Cal>
{/*         </button> */}

      </div>

    </>
  )
}

export default App
