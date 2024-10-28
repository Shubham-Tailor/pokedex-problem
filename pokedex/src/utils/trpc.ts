import { createReactQueryHooks } from '@trpc/react-query';
import type { AppRouter } from '../routers/pokemonRouter';

export const trpc = createReactQueryHooks<AppRouter>();
