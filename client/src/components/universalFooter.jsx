import {Link} from "react-router-dom";
import {useEffect, useState} from "react";


export default function universalFooter(props) {

    console.log(props)

    const [goToTop, setGoToTop] = useState(false);

    function goToTopNow() {
        setGoToTop(true);
    }

    useEffect(() => {
        if(goToTop) {
            window.scroll(0, 0)
            setGoToTop(false);
        }
    }, [goToTop]);

    return (
        <footer id="universalFooter">
            <nav>
                <Link to=".." relative="path">Back</Link>
                <a href="#" onClick={goToTopNow}>Começo da página</a>
            </nav>
        </footer>
    )
}