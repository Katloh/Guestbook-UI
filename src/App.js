import React, {useEffect, useState} from 'react';
import './App.css';
import {EntryForm} from "./components/EntryForm";
import {Entries} from "./components/Entries";
import {getEntries} from "./services/GuestBookAPI";

function App(props) {

    const [entries, setEntries] = useState([])

    useEffect(() => {           //Arrow Function
        loadAndSetEntries()
    }, [])                  //[] = keine Dependency

    return (                //<Header/> = Aufruf Funktion Header

        <div className="App">

            <Header/>

            <div className="container">
                <Entries entries={entries}/>
                <EntryForm onEntryAdded={loadAndSetEntries}/>
            </div>
        </div>
    );

    async function loadAndSetEntries() {
        const data = await getEntries()
        setEntries(data)
    }
}

function Header() {
    return <div className="jumbotron">
        <div className="container">
            <h2>Gästebuch</h2>
        </div>
    </div>;
}

export default App;
