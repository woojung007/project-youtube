import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchHeader from 'components/SearchHeader';
import { Outlet } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <SearchHeader />
            <QueryClientProvider client={queryClient}>
                <Outlet />
            </QueryClientProvider>
        </>
    );
}

export default App;
