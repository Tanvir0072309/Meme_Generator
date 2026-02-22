import { useState, useEffect } from "react"
import "../index.css"

export function Meme() {

    const [meme, setMeme] = useState({
        topText: "Bro, at least",
        bottomText: "enter some text",
        randomImage: "https://images.meme-arsenal.com/8bb937b22acb294fef5fb372a92aaf3e.jpg"
    })

    const [allMemes, setAllMemes] = useState([])
    const [showMeme, setShowMeme] = useState(true)  // default visible

    // Fetch memes only (image change nahi karenge yaha)
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                setAllMemes(data.data.memes)
            })
            .catch(err => console.log("Error:", err))
    }, [])

    // Generate random meme image
    function generateMeme() {

        if (allMemes.length === 0) return

        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
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
                    />
                </div>

                <div className="input-group">
                    <label>BOTTOM TEXT</label>
                    <input
                        type="text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
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