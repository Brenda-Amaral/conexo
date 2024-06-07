import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import UniversalHeader from "../components/universalHeader.jsx";
import UniversalFooter from "../components/universalFooter.jsx";

export default function Game() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [disciplinaMostrada, setDisciplinaMostrada] = useState("");

    const disciplina = searchParams.get("disciplina");

    useEffect(() => {
        switch(disciplina) {
            case "historia":
                setDisciplinaMostrada("História");
                break;
            case "portugues":
                setDisciplinaMostrada("Português");
                break;
            case "english":
                setDisciplinaMostrada("English");
                break;
            default:
                setDisciplinaMostrada("Qualquer");
                break;
        }
    }, [disciplina]);


    return (
        <>
            <UniversalHeader />
                <div id="game">
                    <h1>Disciplina selecionada: {disciplinaMostrada}</h1>
                </div>
            <UniversalFooter />
        </>
    );
}
