import FooterLogo from "./FooterLogo"

export default function Footer() {
    return (
        <>
            <footer>
                <div className="gigaBigContainer">
                    <div className="listsContainer">
                        <div className="list">
                            <h3>DC COMICS</h3>
                            <ul>
                                <li>Characters</li>
                                <li>Comics</li>
                                <li>Movies</li>
                                <li>TV</li>
                                <li>Games</li>
                                <li>Video</li>
                                <li>News</li>
                            </ul>
                        </div>

                        <div className="list">
                            <h3>SHOP</h3>
                            <ul>
                                <li>Shop DC</li>
                                <li>Shop DC collectibles</li>
                            </ul>
                        </div>

                        <div className="list">
                            <h3>DC</h3>
                            <ul>
                                <li>Characters</li>
                                <li>Comics</li>
                                <li>Movies</li>
                                <li>TV</li>
                                <li>Games</li>
                                <li>Video</li>
                                <li>News</li>
                                <li>Characters</li>
                                <li>Comics</li>
                                <li>Movies</li>
                                <li>TV</li>
                                <li>Games</li>
                                <li>Video</li>
                                <li>News</li>
                            </ul>
                        </div>

                        <div className="list">
                            <h3>SITES</h3>
                            <ul>
                                <li>DC</li>
                                <li>MAD Megaine</li>
                                <li>Shop DC</li>
                                <li>Shop DC</li>
                                <li>Shop DC</li>
                                <li>Shop DC</li>
                            </ul>
                        </div>
                    </div>

                    <figure>
                        <FooterLogo />
                    </figure>
                </div>

                <div className="bottomBar">
                    <button>SIGN-UP NOW!</button>

                    <div className="social">
                        <span>FOLLOW US</span>

                        <img src="../public/img/footer-facebook.png" alt="" />
                    </div>
                </div>
            </footer >
        </>
    )
}