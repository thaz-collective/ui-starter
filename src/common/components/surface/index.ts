import { SurfaceContextProvider } from './components/surface-context-provider';
import { SurfaceRoot } from './components/surface-root';

export const Surface = Object.assign(SurfaceRoot, {
  Root: SurfaceRoot,
  Provider: SurfaceContextProvider,
});

export type { SurfaceContextProviderProps } from './components/surface-context-provider';
export type { SurfaceRootProps } from './components/surface-root';

export { useSurfaceContext } from './context';

export type { SurfaceVariants, SlotsSurfaceVariants, RequiredSurfaceVariants } from './variants';
export { surfaceVariants } from './variants';
