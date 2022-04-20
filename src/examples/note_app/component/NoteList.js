import React , {useContext} from 'react'
import Note from './Note'
import NotesContext  from "../context/notes-context";

const NoteList = () => {
    const {notes} = useContext(NotesContext)
    return (
        notes.map((note) => (
            <Note note={note} key={note.title}/>
        ))
    )
}

export default NoteList