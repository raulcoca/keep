import { useState } from 'react'
import { CheckList } from '../ChecksList/CheckList'
import { Check } from '../../types/Check'
import { TODO_FILTERS } from '../../const'
import { FilterValue } from '../../types/FilterValue'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

const mockCheck: Check[] = [
  {
    id: 1,
    title: 'todo 1',
    completed: true
  },
  {
    id: 2,
    title: 'todo 2',
    completed: false
  },
  {
    id: 3,
    title: 'todo 3',
    completed: false
  }
]


const App = (): JSX.Element => {

  console.log(import.meta.env.VITE_SOME_KEY);
  console.log(import.meta.env.db_PASSWORD);




  const [checks, setChecks] = useState(mockCheck)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)


  const handleRemove = (id: Check['id']) => {
    const newChecks = checks.filter(check => check.id !== id);
    setChecks(newChecks)
  }

  const handleCompleted = (id: Check['id'], completed: Check['completed']) => {
    const newChecks = checks.map(check => {
      if (check.id === id) {
        return { ...check, completed: completed }
      }
      return check
    })
    setChecks(newChecks);
  }

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter)
  }

  const activeCount = checks.filter(check => !check.completed).length
  const completedCount = checks.length - activeCount

  const filteredChecks = checks.filter(check => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !check.completed
    }
    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return check.completed
    }
    return check
  })

  const handleRemoveAllCompleted = () => {
    const newChecks = checks.filter(check => !check.completed);
    setChecks(newChecks)
  }

  const handleAddCheck = (title: Check['title']) => {
    const newCheck = {
      id: Math.random(),
      title,
      completed: false
    }
    setChecks([newCheck, ...checks])
  }

  return (
    <div className='todoapp'>
      <Header onAddCheck={handleAddCheck} />
      <CheckList onRemoveCheck={handleRemove} onToggleCompleted={handleCompleted} checks={filteredChecks} />
      <Footer filterSelected={filterSelected} activeCount={activeCount} completedCount={completedCount} handleFilterChange={handleFilterChange} onClearComplete={handleRemoveAllCompleted} />
    </div>
  )
}

export default App 
