import React from 'react';
import { render } from '@testing-library/react';

import TextInput from './TextInput';

describe('TextInput', () => {
  test('renders the TextInput component', () => {
    render(<TextInput />);
  });
});
