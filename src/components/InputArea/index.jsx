import { useState } from 'react'
import * as C from './styles'

import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';

export const InputArea = ({onAdd}) => {

    const handleAddEvent = () => {

        let newItem = {
            date: new Date(2024, 4, 8),
            category: 'food',
            title: 'Item de teste',
            value: 250.25
        }

        onAdd(newItem)
        
    }

    return (
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    )
}