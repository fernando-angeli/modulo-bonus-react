import { Container } from "./styles";
import reminderLogo from "../../assets/images/Logo.jpg";
import { Button } from "../Button";
import { NewStickyModal } from "../NewStickyModal";
import { useState } from "react";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <Container>
      <img src={reminderLogo} alt="Logo React Reminder" />

      <Button title="Adicionar Lembrete" onClick={handleOpenModal} />

      <NewStickyModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </Container>
  );
}
