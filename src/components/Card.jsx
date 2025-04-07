import comics from "../../data/comics";

function Card(props) {
    const comics = props.Comics;
    console.log(comics)
    return (
        <>
            {
                comics.map(element =>
                    <div key={element.id} className="card">
                        <img src={element.thumb} alt={element.title} />
                    </div>
                )
            }
        </>
    )
}

console.log(Card(comics))

export default Card