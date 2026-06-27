import { Admin, Resource } from 'react-admin';
import { customTheme } from './theme/customTheme';
import { EventList } from './components/events/EventList';
import { EventCreate } from './components/events/EventCreate';
import { EventEdit } from './components/events/EventEdit';
import dataProvider from './providers/dataProvider'
import { authProvider } from './providers/authProvider';

const App = () => (
    <Admin theme={customTheme} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource 
            name="events" 
            list={EventList}
            create={EventCreate}
            edit={EventEdit}
            options={{ label: 'Event' }}
        />
    </Admin>
);

export default App;