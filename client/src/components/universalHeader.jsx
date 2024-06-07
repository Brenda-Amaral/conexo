import {Link} from "react-router-dom";


export default function universalHeader(props) {

    console.log(props)

    return (
        <header id="universalHeader">
            <nav>
                <Link to=".." relative="path">Back</Link>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/game">Game</Link>
            </nav>
        </header>
    )
}