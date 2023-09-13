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
      color: var(--blue-900);
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

    -webkit-box-shadow: 2px 8px 8px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 8px 8px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 2px 8px 8px -1px rgba(0, 0, 0, 0.75);

    > h2 {
      font-family: "Roboto";
      color: var(--black);
    }
    > p {
      font-family: "Roboto";
      width: 90%;
      color: var(--font-black);

      overflow: auto;
      text-align: center;
      word-break: break-all;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
