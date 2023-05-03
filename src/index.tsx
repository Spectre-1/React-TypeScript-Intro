import ReactDOM from 'react-dom'
import EventComponent from './events/EventComponents';

const App = () => {
    return (
    <div>
        <EventComponent />
    </div>
    )
};

ReactDOM.render(
<App />, 
document.querySelector('#root'));