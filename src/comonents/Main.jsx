import { useState, useEffect } from "react"
import "../index.css"

export function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemes, setAllMemes] = useState([])
    const [showMeme, setShowMeme] = useState(false)

    // ✅ Fetch memes once when component loads
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                setAllMemes(data.data.memes)
                setMeme(prev => ({
                    ...prev,
                    randomImage: data.data.memes[0].url
                }))
            })
    }, [])

    // ✅ Generate random meme image
    function generateMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

        setShowMeme(true)
    }

    // ✅ Handle input change
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