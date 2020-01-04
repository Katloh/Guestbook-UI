import React from 'react';
import './App.css';
import {EntryForm} from "./components/EntryForm";

function App() {
    return (

        <div className="App">

            <Header/>

            <div className="container">
                <Entries/>
                <EntryForm/>
            </div>
        </div>
    );
}

function Header() {
    return <div className="jumbotron">
        <div className="container">
            <h2>Gästebuch</h2>
        </div>
    </div>;
}

function Entries() {
    return <>
        <h3>Bisherige Einträge</h3>
        <table className="table table-striped">
            <tbody id="content">Keine</tbody>
        </table>
    </>;
}

export default App;
