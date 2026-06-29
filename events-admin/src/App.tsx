import { Admin, Resource } from 'react-admin';
import { customTheme } from './theme/customTheme';
import dataProvider from './providers/dataProvider';
import { authProvider } from './providers/authProvider';

import { Dashboard } from './components/Dashboard';
import CustomLoginPage from "./components/customLoginPage";

import { EventList } from './components/events/EventList';
import { EventCreate } from './components/events/EventCreate';
import { EventEdit } from './components/events/EventEdit';
import { EventShow } from './components/events/EventShow';

import { SpeakerList } from "./components/speakers/SpeakerList";
import { SpeakerCreate } from "./components/speakers/SpeakerCreate";
import { SpeakerEdit } from "./components/speakers/SpeakerEdit";
import { SpeakerShow } from "./components/speakers/SpeakerShow";

const App = () => (
    <Admin 
        theme={customTheme} 
        dataProvider={dataProvider}
        authProvider={authProvider}
        loginPage={CustomLoginPage}
        dashboard={Dashboard}
    >
        <Resource 
            name="events"
            list={EventList}
            create={EventCreate}
            edit={EventEdit}
            show={EventShow}
            options={{ label: 'Events' }}
        />

        <Resource 
            name="speakers"
            list={SpeakerList}
            create={SpeakerCreate}
            edit={SpeakerEdit}
            show={SpeakerShow}
            options={{ label: 'Speakers' }}
        />
    </Admin>
);

export default App;