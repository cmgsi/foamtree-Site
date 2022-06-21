
import styled from 'styled-components';
import { start } from './TesteQuery'

import React, { useEffect, useState } from 'react';




function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    start()
      .then(items => {
        if (mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    (
      <div>
        Hello World
        
      </div>
    )
  )
}

export default App;