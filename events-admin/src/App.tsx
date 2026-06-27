import { Admin, Resource } from 'react-admin';
import { customTheme } from './theme/customTheme';
import { EventList } from './components/events/EventList';
import { EventCreate } from './components/events/EventCreate';
import { EventEdit } from './components/events/EventEdit';
import dataProvider from './providers/dataProvider'
import { authProvider } from './providers/authProvider';
import { EventShow } from './components/events/EventShow';
import { Dashboard } from './components/Dashboard';

const App = () => (
    <Admin theme={customTheme} 
    dataProvider={dataProvider}
    authProvider={authProvider}dashboard={Dashboard}>
        <Resource 
           name="events" 
            list={EventList}
            create={EventCreate}
            edit={EventEdit}
            show={EventShow}
            options={{ label: 'Event' }}
        />
    </Admin>
);

export default App;