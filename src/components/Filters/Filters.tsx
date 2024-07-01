import { FILTERS_BUTTONS } from '../../const';
import { type FilterValue } from '../../types/FilterValue';

interface Props {
    filterSelected: FilterValue
    onFilterChange: (filter: FilterValue) => void
}

export const Filters = ({ filterSelected, onFilterChange }: Props) => {

    return <>
        <ul className='filters'>
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, label }]) => {
                    const isSelected = key === filterSelected
                    const className = isSelected ? 'selected' : ''


                    return (
                        <li key={key}>
                            <a className={className} href={href} onClick={(ev) => {
                                ev.preventDefault();
                                onFilterChange(key as FilterValue);
                            }}>{label}</a>
                        </li>
                    )

                })
            }

        </ul>
    </>;
};
