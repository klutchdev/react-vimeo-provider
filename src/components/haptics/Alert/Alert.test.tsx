import React from 'react';
import { render } from '@testing-library/react';

import Alert from './Alert';

describe('Alert', () => {
  test('renders the Alert component', () => {
    render(
      <Alert content="This is a dismissible alert banner" handleDismiss={() => {}} />
    );
  });
});
