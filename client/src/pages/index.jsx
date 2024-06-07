import React, { useState, useEffect } from 'react';
import axios from "axios";
import UniversalHeader from "../components/universalHeader.jsx";
import UniversalFooter from "../components/universalFooter.jsx";
import {Link} from "react-router-dom";


export default function Home() {


    return (
        <>
            <UniversalHeader />
                <div id="tituloelogo">
                    <Link to="/"><img src="/logo.svg" alt="Conexo Logo"/></Link>
                    <h1>Conexo</h1>
                </div>

            <UniversalFooter />
        </>
    );
}
