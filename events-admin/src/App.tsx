import { Admin, Resource } from "react-admin";
import { customDataProvider } from "./providers/customDataProvider";
import { RoomList } from "./components/rooms/roomList";
import { EventList } from "./components/events/EventList";
import { SpeakerList } from "./components/speakers/SpeakerList";
import { SpeakerCreate } from "./components/speakers/SpeakerCreate";
import { SpeakerEdit } from "./components/speakers/SpeakerEdit";

export const App = () => (
  <Admin dataProvider={customDataProvider}>
    <Resource name="rooms" list={RoomList} />
    <Resource name="events" list={EventList} />
     <Resource name="speakers" list={SpeakerList} edit={SpeakerEdit} create={SpeakerCreate} />
  </Admin>
);