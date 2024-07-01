import { Check as CheckT } from '../../types/Check'
import { Check } from '../Check/Check'

interface Props {
    checks: CheckT[]
    onRemoveCheck: (id: CheckT['id']) => void
    onToggleCompleted: (id: CheckT['id'], completed: CheckT['completed']) => void
}

export const CheckList = ({ checks, onRemoveCheck, onToggleCompleted }: Props) => {


    return (
        <ul className='todo-list'>
            {
                checks.map((check) => (
                    <li key={check.id} className={`${check.completed ? 'completed' : ''}`}>
                        <Check onRemoveCheck={onRemoveCheck} onToggleCompleted={onToggleCompleted} key={check.id} check={check} />
                    </li>
                ))
            }
        </ul>
    )
}
