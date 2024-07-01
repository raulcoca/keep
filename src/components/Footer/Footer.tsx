import { FilterValue } from '../../types/FilterValue'
import { Filters } from '../Filters/Filters'

interface Props {
    activeCount: number
    completedCount: number
    onClearComplete: () => void
    filterSelected: FilterValue
    handleFilterChange: (filter: FilterValue) => void
}

export const Footer = ({ onClearComplete, activeCount = 0, completedCount = 0, filterSelected, handleFilterChange }: Props) => {


    return (
        <footer className='footer'>
            <span className='todo-count'>
                {activeCount} checks pendientes
            </span>

            <Filters filterSelected={filterSelected} onFilterChange={handleFilterChange} />

            {
                completedCount > 0 && (
                    <button className='clear-completed' onClick={onClearComplete}>Borrar completadas</button>
                )
            }
        </footer>
    )
}