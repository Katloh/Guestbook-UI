import React, {useState} from "react";
import {putEntry} from "../services/GuestBookAPI";

export function EntryForm(props) {

    const [formState, setFormState] = useState({title: "", comment: "", commenter: ""})
    const [isSent, setSended] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault()

        if (formState.title === "" || formState.comment === "" || formState.commenter === "") {
            window.alert("Bitte alle Felder ausfüllen")
        } else {
            await putEntry(formState)
            setSended(true)
            props.onEntryAdded()
        }
    }

    function handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const id = target.id;

        let newState = formState
        newState[id] = value

        setFormState(newState);
    }

    if (isSent === true) {
        return <div className="alert alert-success" role="alert">
            Hat alles gut funktioniert!
        </div>

    } else {

        return <form className="form-vertical">
            <div className="form-group">
                <div className="row">
                    <label className="col-sm-2 control-label" htmlFor="title">Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="title" placeholder="Ihr Titel"
                               onChange={handleInputChange}/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <label className="col-sm-2 control-label" htmlFor="comment">Ihr Beitrag</label>
                    <div className="col-sm-10">
                    <textarea rows="4" className="form-control" id="comment" placeholder="Ihre Nachricht"
                              onChange={handleInputChange}></textarea>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <label className="col-sm-2 control-label" htmlFor="commenter">Ihre Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="commenter" placeholder="Ihr Name"
                               onChange={handleInputChange}/>
                    </div>
                </div>
            </div>


            <div className="rows">
                <div className="col-sm-10 col-sm-offset-2">
                    <button className="btn btn-success"onClick={handleSubmit}>Eintragen</button>
                </div>
            </div>
        </form>


    }
}