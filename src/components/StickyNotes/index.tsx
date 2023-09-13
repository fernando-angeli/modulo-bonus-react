/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
import { Container, Grid } from "./styles";
import NotesContext from "../../hooks/notesContext";
//import { For } from "million/react";

export function StickyNotes() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { notes } = useContext<any>(NotesContext);
  const [currentColorSticky, setCurrentColorSticky] = useState(1);

  /*useEffect(() => {
    if (currentColorSticky < 3) setCurrentColorSticky(currentColorSticky + 1);
    else setCurrentColorSticky(1);
  }, [currentColorSticky]);*/

  function renderSticky(note: any, index: number) {
    return (
      <div
        key={index}
        style={{ background: `var(--sticky-${currentColorSticky})` }}
      >
        <h2>{note.title}</h2>
        <p>{note.description}</p>
      </div>
    );
  }

  return (
    <Container>
      <div className="reminderTitle">
        <h1>Lembretes - {notes.length}</h1>
      </div>
      <Grid>
        {notes.map((note: any, index: number) => renderSticky(note, index))}
      </Grid>
    </Container>
  );
}
