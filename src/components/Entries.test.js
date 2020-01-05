import React from 'react';
import {
    render,
} from '@testing-library/react';
import {getEntries} from "../services/GuestBookAPI";
import {Entries} from "./Entries";

test('Entries component shows supplied entries', () => {
    const someEntries = [{title: "title", comment: "comment", commenter: "commenter"}]

    const {getByText} = render(<Entries entries={someEntries}/>)

    expect(getByText('title')).toBeInTheDOM()
    expect(getByText('comment')).toBeInTheDOM()
    expect(getByText('commenter')).toBeInTheDOM()

})