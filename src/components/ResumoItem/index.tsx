import * as C from './styles'


type Props = {
    titulo: string;
    value: number;
    color?: string
}

export const ResumoItem = ({ titulo, value, color }: Props) => {
    return (
        <C.Container>
            <C.Titulo className="resumo-item-titulo" >{titulo}</C.Titulo>
            <C.Info className="resumo-item-value" color={color}>R${value}</C.Info>
        </C.Container>
    );
}