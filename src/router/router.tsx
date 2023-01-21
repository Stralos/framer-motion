import { ProfilePage } from "pages/profile/ProfilePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useOutlet,
} from "react-router-dom";
import { AccountPage } from "pages/Account";
import { AboutPage } from "pages/dashboard/About";
import { HistoryPage } from "pages/HistoryPage";
import { RootPage } from "pages/RootPage";
import { Paths } from "./paths";

function DasboardLayout() {
  const outlet = useOutlet();

  return (
    <div>
      Dashboard
      {outlet}
    </div>
  );
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootPage />}>
      <Route index element={<AccountPage />} />
      <Route path={Paths.about.path} element={<HistoryPage />} />
      <Route path={Paths.profile.path} element={<ProfilePage />} />
      <Route path={Paths.booking.root.path} element={<DasboardLayout />}>
        <Route index element={<AboutPage />} />
        <Route path={Paths.booking.slots.path} element={<AboutPage />} />
      </Route>
    </Route>
  )
);
