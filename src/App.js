import React, {useEffect, useState} from 'react';
import './App.css';
import {EntryForm} from "./components/EntryForm";

function App(props) {

    const [entries, setEntries] = useState([])

    useEffect(() => {
        loadAndSetEntries()
    }, [])

    return (

        <div className="App">

            <Header/>

            <div className="container">
                <Entries entries={entries}/>
                <EntryForm onEntryAdded={loadAndSetEntries}/>
            </div>
        </div>
    );

    async function loadAndSetEntries() {
        const response = await fetch("http://localhost:8080/guestbook", {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json()
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

function Entries(props) {
    return <>
        <h3>Bisherige Einträge</h3>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Titel</th>
                <th scope="col">Comment</th>
                <th scope="col">Commenter</th>
            </tr>
            </thead>
            <tbody>
            {props.entries.map(entry =>

                (<tr>
                    <td>{entry.title}</td>
                    <td>{entry.comment}</td>
                    <td>{entry.commenter}</td>
                </tr>))
            }


            </tbody>
        </table>
    </>;
}

export default App;
