import React from 'react';
import { render } from '@testing-library/react';

import LoadingButton from './LoadingButton';

describe('LoadingButton', () => {
  test('renders the LoadingButton component', () => {
    render(<LoadingButton label="Hello world!" loading={false} />);
  });
});
