import React from "react"

export function Footer() {
    return (
        <footer className="project-footer">
            <div className="footer-content">

                <h3>Meme Generator Project</h3>

                <p>
                    This project generates random memes using the Imgflip public API.
                    Users can add custom top and bottom text and create dynamic meme content.
                </p>

                <p>
                    API Used: Imgflip Meme API
                </p>

                <div className="footer-buttons">

                    <a
                        href="https://github.com/Tanvir0072309/Meme_Generator"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="footer-btn">
                            View Source Code
                        </button>
                    </a>

                    <a
                        href="https://imgflip.com/api"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="footer-btn secondary">
                            Visit API Website
                        </button>
                    </a>

                </div>

            </div>
        </footer>
    )
}