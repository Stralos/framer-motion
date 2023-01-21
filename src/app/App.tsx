import { RouterProvider } from './providers/RouterProvider'
import { QueryProvider} from './providers/QueryProvider';
import { PrefetchProvider } from './providers/PreFetchProvider';

export const App = () => (
  <>
    <QueryProvider>
      <PrefetchProvider>
        <RouterProvider />
      </PrefetchProvider>
    </QueryProvider>
  </>
);