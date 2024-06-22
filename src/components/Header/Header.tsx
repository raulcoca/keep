import { Check } from '../../types/Check';
import { CreateCheck } from '../CreateCheck/CreateCheck';

interface Props {
    onAddCheck: (title: Check['title']) => void
}


export const Header: React.FC<Props> = ({ onAddCheck }) => {
    return (
        <header className="header">
            <h1>Mis tareas</h1>
            <CreateCheck onAddCheck={onAddCheck}></CreateCheck>
        </header>
    );
}