import { useState } from "react"
import memeImage from '../assets/img/meme.jpeg'
import "../index.css"

export function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: memeImage
    })
    const [showMeme, setShowMeme] = useState(false)

    function generateMeme() {
        setShowMeme(true)
    }
    function handleChange(e) {
        const { name, value } = e.target

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className="meme-container">

            <div className="form">

                <div className="input-group">
                    <label>TOP TEXT</label>
                    <input
                        type="text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                        placeholder="Enter top text"
                    />

                </div>

                <div className="input-group">
                    <label>BOTTOM TEXT</label>
                    <input
                        type="text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                        placeholder="Enter bottom text"
                    />
                </div>

                <button onClick={generateMeme} className="meme-btn">
                    Generate Meme
                </button>
            </div>

            {showMeme && (
                <div className="meme">
                    <img src={meme.randomImage} alt="meme" />
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            )}

        </main>
    )
}