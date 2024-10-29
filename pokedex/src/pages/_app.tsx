import { AppType } from 'next/app';
import { httpBatchLink } from '@trpc/client';
import { trpc } from '../utils/trpc';
import '../app/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PokemonComponent from '../components/pokemonComponent'; // Adjust path as needed

const queryClient = new QueryClient();

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
});

// const MyApp: AppType = ({ Component, pageProps }) => {
//   return (
//     <QueryClientProvider client={queryClient}> {/* Wrap with QueryClientProvider */}
//       <trpc.Provider client={trpcClient} queryClient={queryClient}> {/* Use both providers */}
//         <Component {...pageProps} />
//       </trpc.Provider>
//     </QueryClientProvider>
//   );
// };

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}> {/* Wrap with QueryClientProvider */}
      <trpc.Provider client={trpcClient} queryClient={queryClient}> {/* Use both providers */}
        <Component {...pageProps} />
        <PokemonComponent /> {/* Render PokemonComponent here */}
      </trpc.Provider>
    </QueryClientProvider>
  );
};


export default MyApp;
