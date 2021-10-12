
import { Item } from '../../types/Item'
import * as C from './styles'
import { TableItem } from '../TableItem/index';

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn >Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={200}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn width={200}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={250}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item, key) => (
                       <TableItem key={key} item={item}/>
                    ))
                }
            </tbody>
        </C.Table>
    )
}