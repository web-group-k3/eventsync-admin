import { Admin, Resource } from "react-admin";
import { customDataProvider } from "./providers/customDataProvider";
import { RoomList } from "./components/rooms/roomList";
import { EventList } from "./components/events/EventList";
import { authProvider } from "./providers/authProvider";

export const App = () => (
  <Admin
    dataProvider={customDataProvider}
    authProvider={authProvider} // ✅
  >
    <Resource name="rooms" list={RoomList} />
    <Resource name="events" list={EventList} />
  </Admin>
);