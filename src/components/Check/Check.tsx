import {Check as CheckT} from '../../types/Check'

interface props {
    check: CheckT
    onRemoveCheck: (id: CheckT['id']) => void
    onToggleCompleted: (id: CheckT['id'], completed: CheckT['completed']) => void
}

export const Check: React.FC<props> = ({check, onRemoveCheck, onToggleCompleted}) => {

    const handleRemove = () => {
        onRemoveCheck(check.id)
    }
    const handleChangeCheckbox = (ev: React.ChangeEvent<HTMLInputElement>) => {
        onToggleCompleted(check.id, ev.target.checked)
    }

    return (
        <div className="check">
            <input 
            className='toggle'
            type="checkbox" 
            checked={check.completed}
            onChange={handleChangeCheckbox} 
            />
            <label>{check.title}</label>
            <button
                className='destroy'
                onClick={handleRemove}
            ></button>
        </div>
    )
}