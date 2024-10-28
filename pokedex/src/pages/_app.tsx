import { AppType } from 'next/app';
import { trpc } from '..src/utils/trpc'; // Adjust this path based on your directory structure
import '../styles/globals.css'; // Import your global styles if applicable

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <trpc.Provider queryClient={trpc.createQueryClient()}>
      <Component {...pageProps} />
    </trpc.Provider>
  );
};

export default MyApp;
