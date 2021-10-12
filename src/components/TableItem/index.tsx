import { Item } from '../../types/Item';
import * as C from './styles'
import { formatDate } from '../../Helpers/daterFilter';
import { categorys } from '../../data/categorys';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categorys[item.category].color}>
                    {categorys[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categorys[item.category].expense ? 'red': 'green'}>
                    R${item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
}