import { useContext, useState } from "react";
import { Button } from "../Button";
import { Container } from "./styles";
import Modal from "react-modal";
import NotesContext from "../../hooks/notesContext";

interface ModelProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewStickyModal({ isOpen, onRequestClose }: ModelProps) {
  const [stickyName, setStickyName] = useState("");
  const [stickyDescription, setStickyDescription] = useState("");
  const [stickyColor, setStickyColor] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { notes, setNotes } = useContext<any>(NotesContext);

  const formData = {
    title: stickyName,
    description: stickyDescription,
    color: stickyColor,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleFormSubmit(event: any) {
    event.preventDefault();
    event.target.reset();
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc
      className="react-model-content"
      style={{ overlay: { background: "rgba(0, 0, 0, 0.409" } }}
    >
      <Container onSubmit={handleFormSubmit}>
        <h1>Criar Lembrete</h1>
        <div>
          <input
            type="text"
            placeholder="Nome"
            onChange={(event) => setStickyName(event.target.value)}
          />
          <textarea
            placeholder="Descrição"
            onChange={(event) => setStickyDescription(event.target.value)}
          />
          <div>
            <label>Selecione a cor</label>
            <div className="sticky sticky1">
              <input
                type="radio"
                value={1}
                name="color"
                onChange={(event) => setStickyColor(event.target.value)}
              />
            </div>
            <div className="sticky sticky2">
              <input
                type="radio"
                value={2}
                name="color"
                onChange={(event) => setStickyColor(event.target.value)}
              />
            </div>
            <div className="sticky sticky3">
              <input
                type="radio"
                value={3}
                name="color"
                onChange={(event) => setStickyColor(event.target.value)}
              />
            </div>
          </div>
        </div>
        <Button
          title="Adicionar lembrete"
          onClick={() => setNotes([...notes, formData])}
        />
      </Container>
    </Modal>
  );
}
