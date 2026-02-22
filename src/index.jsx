
import { MyHeader } from './components/Header.jsx'
import { Meme } from './components/Main.jsx'
import { Footer } from "./components/Footer"
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <MyHeader />
        <Meme />
        <Footer />
    </>
)