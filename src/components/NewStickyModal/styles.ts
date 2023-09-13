import { styled } from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  width: 40vw;
  height: 80vh;

  position: absolute;

  // PARA CENTRALIZAR NA TELA
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: var(--gray-100);
  border-radius: 8px;

  > div {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 1rem;

    > input {
      height: 2.2rem;
    }

    > input,
    textarea {
      width: 100%;
      border: 1px solid var(--gray-600);
      border-radius: 0.5rem;
      padding: 0.4rem;
    }

    > textarea {
      max-height: 12rem;
      max-width: 100%;
      min-height: 8rem;
      min-width: 100%;
    }
  }

  h1 {
    color: var(--blue-900);
    font-family: "Roboto";
  }
`;
