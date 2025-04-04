import Logo from "./Logo"

export default function Header(props) {
    const menuItems = props.linksArray
    console.log(menuItems)

    return (
        <>
            <header>
                <figure>
                    <Logo />
                </figure>

                <ul>
                    <li>{menuItems[0]}</li>
                    <li>{menuItems[1]}</li>
                    <li>{menuItems[2]}</li>
                    <li>{menuItems[3]}</li>
                    <li>{menuItems[4]}</li>
                    <li>{menuItems[5]}</li>
                    <li>{menuItems[6]}</li>
                    <li>{menuItems[7]}</li>
                    <li>{menuItems[8]}</li>
                    <li>{menuItems[9]}</li>
                </ul>
            </header>
        </>
    )
}