import {render, act} from "@testing-library/react";
import {EntryForm} from "./EntryForm";
import userEvent from "@testing-library/user-event";
import React from "react";
import {putEntry} from "../services/GuestBookAPI";

jest.mock("../services/GuestBookAPI")

test('input text is present', () => {
    const titel = 'Mein Titel'
    const beitrag = 'Mein Beitrag'
    const name = 'Katja'
    const expectedEntry = {title: "Mein Titel", comment: "Mein Beitrag", commenter: "Katja"}

    const {container, getByPlaceholderText,getByText} = render(<EntryForm onEntryAdded={()=>{}}/>);
    const inputTitel = getByPlaceholderText('Ihr Titel')
    const inputBeitrag = getByPlaceholderText('Ihre Nachricht')
    const button = getByText(/Eintragen/i)
    const inputName = getByPlaceholderText('Ihr Name')

    act(() => {
        userEvent.type(inputTitel, titel)
        userEvent.type(inputBeitrag, beitrag)
        userEvent.type(inputName, name)
        userEvent.click(button)
    });
    expect(putEntry).toHaveBeenCalledWith(expectedEntry)
})