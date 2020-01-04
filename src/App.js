import React from 'react';
import './App.css';

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

function EntryForm() {
    return <form className="form-vertical">
        <div className="form-group">
            <div className="row">
                <label className="col-sm-2 control-label" htmlFor="title">Title</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="title" placeholder="Ihr Titel"/>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <label className="col-sm-2 control-label" htmlFor="comment">Ihr Beitrag</label>
                <div className="col-sm-10">
                    <textarea rows="4" className="form-control" id="comment" placeholder="Ihre Nachricht"></textarea>
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <label className="col-sm-2 control-label" htmlFor="commenter">Ihre Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="commenter" placeholder="Ihr Name"/>
                </div>
            </div>
        </div>


        <div className="rows">
            <div className="col-sm-10 col-sm-offset-2">
                <a id="send" className="btn btn-success">Speichern</a>
                <a href="index.html" className="btn btn-default">Abbrechen</a>
            </div>
        </div>
    </form>


}

export default App;
