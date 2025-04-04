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
                                <li>Terms Of Use</li>
                                <li>Privacy Policy</li>
                                <li>Ad Choices</li>
                                <li>Advertaising</li>
                                <li>Jobs</li>
                                <li>Subscriptions</li>
                                <li>Talent Workshop</li>
                                <li>CPS Certificates</li>
                                <li>Ratings</li>
                                <li>Shop Help</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        <div className="list">
                            <h3>SITES</h3>
                            <ul>
                                <li>DC</li>
                                <li>MAD Megaine</li>
                                <li>DC Kids</li>
                                <li>DC Universe</li>
                                <li>DC Power Visa</li>
                            </ul>
                        </div>
                    </div>

                    <FooterLogo />

                </div>

                <div className="bottomBar">
                    <button>SIGN-UP NOW!</button>

                    <div className="social">
                        <span>FOLLOW US</span>

                        <img src="img/footer-facebook.png" alt="" />
                        <img src="img/footer-twitter.png" alt="" />
                        <img src="img/footer-youtube.png" alt="" />
                        <img src="img/footer-pinterest.png" alt="" />
                        <img src="img/footer-periscope.png" alt="" />
                    </div>
                </div>
            </footer >
        </>
    )
}