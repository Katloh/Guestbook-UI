import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('header is present', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Gästebuch/i);
  expect(header).toBeInTheDocument();
});
