import { Admin, Resource } from "react-admin";
import { customDataProvider } from "./providers/customDataProvider";
import { RoomList } from "./components/rooms/roomList";
import { EventList } from "./components/events/EventList";

export const App = () => (
  <Admin dataProvider={customDataProvider}>
    <Resource name="rooms" list={RoomList} />
    <Resource name="events" list={EventList} />
  </Admin>
);