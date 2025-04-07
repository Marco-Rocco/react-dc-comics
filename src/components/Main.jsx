import Card from "./card";
import Comics from "../../data/comics";

export default function Main(Comics) {
    return (
        <>
            <main>
                <div className="jumbo"></div>

                <div className="container">
                    {/* <Card comics={Comics} /> */}
                </div>

                <nav>

                    <ul>
                        <li><img src="public/img/buy-comics-digital-comics.png" alt="" /><span>Digital Comics</span></li>
                        <li><img src="public/img/buy-comics-merchandise.png" alt="" /><span>Digital Comics</span></li>
                        <li><img src="public/img/buy-comics-subscriptions.png" alt="" /><span>Subscriptions</span></li>
                        <li><img src="public/img/buy-comics-shop-locator.png" alt="" /><span>Subscriptions</span></li>
                        <li><img src="public/img/buy-dc-power-visa.svg" alt="" /><span>Subscriptions</span></li>
                    </ul>
                </nav>
            </main>

        </>
    )
}