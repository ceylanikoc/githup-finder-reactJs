import React from 'react'
import Note from './Note'

const NoteList = ({notes,removeNote}) => {
    return (
        notes.map((note) => (
            <Note note={note} removeNote={removeNote} key={note.title}/>
        ))
    )
}

export default NoteList