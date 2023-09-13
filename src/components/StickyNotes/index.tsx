/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { Container, Grid } from "./styles";
import NotesContext from "../../hooks/notesContext";
//import { For } from "million/react";

export function StickyNotes() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { notes } = useContext<any>(NotesContext);

  return (
    <Container>
      <div className="reminderTitle">
        <h1>Lembretes - {notes.length}</h1>
      </div>
      <Grid>
        {notes.map((note: any, index: number) => (
          <div
            key={index}
            style={{ background: `var(--sticky-${note.color})` }}
          >
            <h2>{note.title}</h2>
            <p>{note.description}</p>
          </div>
        ))}
      </Grid>
    </Container>
  );
}
