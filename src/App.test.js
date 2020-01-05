import React from 'react';
import {
    render,
    getByRole,
    getByTestId,
    getByText,
    screen,
    wait,
    getByPlaceholderText,
    getByDisplayValue
} from '@testing-library/react';
import App from './App';
import {EntryForm} from "./components/EntryForm";

test('input text is present', async () => {
    const titel = 'Mein Titel'
    const beitrag = 'Mein Beitrag'
    const name = 'Katja'
    const text = 'Hat alles gut funktioniert!'

    const spyEntryAdded = jest.fn()

    const {container, debug} = render(<EntryForm onEntryAdded={spyEntryAdded}/>);
    const inputTitel = getByPlaceholderText(container, 'Ihr Titel')
    const inputBeitrag = getByPlaceholderText(container, 'Ihre Nachricht')
    const inputName = getByPlaceholderText(container, 'Ihr Name')
    inputTitel.value = titel
    inputBeitrag.value = beitrag
    inputName.value = name


    const button = screen.getByText(/senden/i)
    button.click()

    debug()

    await wait(() => {
        expect(spyEntryAdded).toHaveBeenCalled()
        expect(getByDisplayValue(container, titel)).toBeVisible()
    })
})

test('header is present', () => {
    const {getByText} = render(<App/>);
    const header = getByText(/Gästebuch/i);
    expect(header).toBeInTheDocument();
});
