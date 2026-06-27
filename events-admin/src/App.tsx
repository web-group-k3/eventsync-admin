import { Admin, Resource } from "react-admin";

import { RoomList } from "./components/rooms/roomList";
import { EventList } from "./components/events/EventList";
import { authProvider } from "./providers/authProvider";
import CustomLoginPage from "./components/customLoginPage"

export const App = () => (
  <Admin
 
  authProvider={authProvider}
  loginPage={CustomLoginPage}
  >
    <Resource name="rooms" list={RoomList} />
    <Resource name="events" list={EventList} />
  </Admin>
);