import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import View from '#view.jsx'
import '#styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <View />
  </StrictMode>
)
