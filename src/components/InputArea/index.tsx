import * as C from './styles'
import { Item } from '../../types/Item';
import { categorys } from '../../data/categorys';
import { useState } from 'react';
type Props = {
    onAdd: (item: Item) => void
}

export const InputArea = ({ onAdd }: Props) => {
    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);
  
    let categoryKeys: string[] = Object.keys(categorys);
  
    const handleAddEvent = () => {
      let errors: string[] = [];
  
      if(isNaN(new Date(dateField).getTime())) {
        errors.push('Data inválida!');
      }
      if(!categoryKeys.includes(categoryField)) {
        errors.push('Categoria inválida!');
      }
      if(titleField === '') {
        errors.push('Título vazio!');
      }
      if(valueField <= 0) {
        errors.push('Valor inválido!');
      }
  
      if(errors.length > 0) {
        alert(errors.join("\n"));
      } else {
        onAdd({
          date: new Date(dateField),
          category: categoryField,
          title: titleField,
          value: valueField
        });
        clearFields();
      }
    }
  
    const clearFields = () => {
      setDateField('');
      setCategoryField('');
      setTitleField('');
      setValueField(0);
    }
  
    return (
        <C.Container id="form">
          <C.InputLabel>
            <C.InputTitle>Data</C.InputTitle>
            <C.Input className="data-input" type="date" value={dateField} onChange={e => setDateField(e.target.value)} />
          </C.InputLabel>
          <C.InputLabel>
            <C.InputTitle>Categoria</C.InputTitle>
            <C.Select className="categoria-select" value={categoryField} onChange={e => setCategoryField(e.target.value)}>
              <>
                <option></option>
                {categoryKeys.map((key, index) => (
                  <option key={index} value={key}>{categorys[key].title}</option>
                ))}
              </>
            </C.Select>
          </C.InputLabel>
          <C.InputLabel>
            <C.InputTitle>Título</C.InputTitle>
            <C.Input className="titulo-input" type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
          </C.InputLabel>
          <C.InputLabel>
            <C.InputTitle>Valor</C.InputTitle>
            <C.Input className="valor-input" type="number" value={valueField} onChange={e => setValueField(parseFloat(e.target.value))} />
          </C.InputLabel>
          <C.InputLabel>
            <C.InputTitle>&nbsp;</C.InputTitle>
            <C.Button className="add-button" onClick={handleAddEvent}>Adicionar</C.Button>
          </C.InputLabel>
        </C.Container>
    );
  }