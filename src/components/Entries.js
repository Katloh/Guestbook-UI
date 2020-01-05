import React from "react";

export function Entries({entries}) {
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
            {entries.map(entry =>

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