import { Item } from '../types/Item'

export const items: Item[] = [
    {
        title: 'McDonalds',
        category: 'food',
        date: new Date(2021, 9, 6),
        value: 32.12
    },

    {
        title: 'Burger King',
        category: 'food',
        date: new Date(2021, 8, 15),
        value: 28
    },

    {
        title: 'Aluguel',
        category: 'rent',
        date: new Date(2021, 9, 15),
        value: 780
    },

    {
        title: 'Salario',
        category: 'salary',
        date: new Date(2021, 9, 15),
        value: 3287.50
    },

    {
        title: 'Bonificação',
        category: 'salary',
        date: new Date(2021, 9, 15),
        value: 200
    },
];