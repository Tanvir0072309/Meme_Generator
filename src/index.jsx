
import { MyHeader } from './comonents/Header.jsx'
import { Meme } from './comonents/Main.jsx'
import { Footer } from "./comonents/Footer"
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <MyHeader />
        <Meme />
        <Footer />
    </>
)