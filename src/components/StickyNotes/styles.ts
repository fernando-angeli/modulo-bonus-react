import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;

  .reminderTitle {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    margin: 3rem 0;

    > h1 {
      color: var(--purple-900);
      font-family: "Roboto";
    }
  }
`;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1.5rem;
  grid-column-gap: 2.5rem;

  width: 90%;

  margin-bottom: 5rem;

  > div {
    display: flex;
    flex-direction: column;

    align-items: center;

    height: 15rem;
    padding: 1rem;
    gap: 1rem;

    background-color: var(--purple-300);
    border-radius: 0.4rem;

    > h2 {
      font-family: "Roboto";
      color: var(--font-black);
    }
    > p {
      font-family: "Roboto";
      width: 90%;

      overflow: auto;
      text-align: center;
      word-break: break-all;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
