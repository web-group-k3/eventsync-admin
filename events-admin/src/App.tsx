import { Admin, Resource } from "react-admin";
import { customTheme } from "./theme/customTheme";
import { EventList } from "./components/events/EventList";
import { EventCreate } from "./components/events/EventCreate";
import { EventEdit } from "./components/events/EventEdit";
import { EventShow } from "./components/events/EventShow";
import { RoomList } from "./components/rooms/RoomList";
import { RoomCreate } from "./components/rooms/RoomCreate";
import { RoomEdit } from "./components/rooms/RoomEdit";
import { RoomShow } from "./components/rooms/RoomShow";
import dataProvider from "./providers/dataProvider";
import { authProvider } from "./providers/authProvider";
import { Dashboard } from "./components/Dashboard";
import CustomLoginPage from "./components/customLoginPage";

const App = () => (
  <Admin
    theme={customTheme}
    dataProvider={dataProvider}
    loginPage={CustomLoginPage}
    authProvider={authProvider}
    dashboard={Dashboard}
  >
    <Resource
      name="events"
      list={EventList}
      create={EventCreate}
      edit={EventEdit}
      show={EventShow}
      options={{ label: "Event" }}
    />
    <Resource
      name="rooms"
      list={RoomList}
      create={RoomCreate}
      edit={RoomEdit}
      show={RoomShow}
      options={{ label: "Room" }}
    />
  </Admin>
);

export default App;
