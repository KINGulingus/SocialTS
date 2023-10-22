import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import store from "./redux/State";

test('renders learn react link', () => {
  render(<App state={store.getState()} dispatch={store.dispatch} store={store} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
