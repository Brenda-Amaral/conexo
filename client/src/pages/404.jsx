import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Error404() {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(10)

    useEffect(() => {
        setTimeout(() => {setTimeLeft(timeLeft-1)}, 1000);
        if(timeLeft <= 0) {
            navigate("/");
        }
    });

    return (
        <>
            <div id="error404">
                <h1>Erro 404</h1>
                <h2>Página não encontrada!</h2>
                <h3>Retornando para <Link to="/">Home</Link> em {timeLeft} segundos.</h3>
            </div>
        </>
    )
}