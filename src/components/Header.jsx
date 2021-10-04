export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src="/handshake.svg" alt="logo" />
                <p>Ralph<span>.</span></p>
            </div>
            <p className = "language">German</p>
            <img className = "menu" src="/menu.svg" alt="menu" />
        </div>
    )
}