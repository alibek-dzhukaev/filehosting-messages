import 'reflect-metadata';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import {fileHostingApplication} from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {fileHostingApplication}
  </StrictMode>,
)
