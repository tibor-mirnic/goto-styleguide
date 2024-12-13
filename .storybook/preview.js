/** @type { import('@storybook/react').Preview } */

import '../src/scss/theme/core.scss';
import '../src/scss/theme/light.scss';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Styleguide', ['About'], "Components", ['Buttons']]
      }
    }
  },
  tags: ['autodocs']
};

export default preview;
