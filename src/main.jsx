import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './features/auth/SignUp.jsx'
import Footer from './components/Footer/Footer.jsx'
import Login from './features/auth/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} >
            <Route path="/" element={<Footer />} />          {/* dashboard product */}
            <Route path="/about" element={<SignUp />} />          {/*About */}
            <Route path="/promotion" element={<SignUp />} />          {/*Promotions*/}
            <Route path="/categories" element={<SignUp />} />           {/*Categories */}
            <Route path="/login" element={<Login />} />           {/*Categories */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
