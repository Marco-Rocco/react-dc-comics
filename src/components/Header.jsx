import Logo from "./Logo"

export default function Header() {
    return (
        <>
            <header>
                <figure>
                    <Logo />
                </figure>

                <ul>
                    <li>CHARACTERS</li>
                    <li>COMICS</li>
                    <li>MOVIES</li>
                    <li>TV</li>
                    <li>GAMES</li>
                    <li>COLLECTIBLES</li>
                    <li>VIDEOS</li>
                    <li>FANS</li>
                    <li>NEWS</li>
                    <li>SHOP</li>
                </ul>
            </header>
        </>
    )
}