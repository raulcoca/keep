import { useState } from 'react'
import { Check } from '../../types/Check'

interface Props {
    onAddCheck: (title: Check['title']) => void
}



export const CreateCheck = ({ onAddCheck }: Props) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onAddCheck(inputValue)
        setInputValue('')
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input className='new-todo' value={inputValue} onChange={handleOnChange} placeholder='Añade un elemento a tu lista' autoFocus></input>
            </form>
        </>
    )
}