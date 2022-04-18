import React , {useContext} from 'react'
import Note from './Note'
import NotesContext  from "../context/notes-context";

const NoteList = ({removeNote}) => {
    const {notes} = useContext(NotesContext)
    return (
        notes.map((note) => (
            <Note note={note} removeNote={removeNote} key={note.title}/>
        ))
    )
}

export default NoteList