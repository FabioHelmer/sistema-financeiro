import * as C from './styles'


type Props = {
    titulo: string;
    value: number;
    color?: string
}

export const ResumoItem = ({ titulo, value, color }: Props) => {
    return (
        <C.Container>
            <C.Titulo>{titulo}</C.Titulo>
            <C.Info color={color}>R${value}</C.Info>
        </C.Container>
    );
}