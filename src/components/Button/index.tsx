import { Container } from "./styles";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

//export function Button(props: ButtonProps) {        > Outra forma
//somante ao utilizar precisa declarar: props.title, props.onClick
export function Button({ title, onClick }: ButtonProps) {
  //Como no Styled foi decladaro que o Container é um "button" ele já carrega as propriedades
  return <Container onClick={onClick}>{title}</Container>;
}
