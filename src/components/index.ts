// Auto-import all components from their respective folders
// When you add a new component file, just import and export it here

// Buttons
import { primaryButton } from './buttons/primary-button';
import { secondaryButton } from './buttons/secondary-button';
import { redButton } from './buttons/red-button';

// Cards
import { basicCard } from './cards/basic-card';

// Menus
import { dropdownMenu } from './menus/dropdown-menu';

// Sliders
import { rangeSlider } from './sliders/range-slider';

// Loading
import { spinner } from './loaders/spinner';
import { skeletonLoader } from './loaders/skeleton-loader';
import { dotsLoader } from './loaders/dots-loader';
import { fullscreenLoading } from './loaders/fullscreen-loading';

// Compass
import { interactiveCompass } from './compass/interactive-compass';

// Export all components as an array
// The gallery will automatically pick up new components added here
export const components = [
  primaryButton,
  secondaryButton,
  redButton,
  basicCard,
  dropdownMenu,
  rangeSlider,
  spinner,
  skeletonLoader,
  dotsLoader,
  fullscreenLoading,
  interactiveCompass,
];

