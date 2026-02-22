import logo from '../assets/img/pngtree-emoji-3d-render-joke-face-from-side-view-png-image_2742694-removebg-preview (1).png'

export function MyHeader() { 
    return (
        <nav className="navbar">
            <div className="nav-left">
                <img
                    src={logo}
                    alt="meme logo"
                    className="logo"
                />
                <h2 className="logo-text">
                    Meme Generator
                </h2>
            </div>
            <p className="nav-right">React Project</p>
        </nav>
    )
}