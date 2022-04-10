import { render, screen } from '@testing-library/react';
import App from './App';
import MyComponent from './App';

test('renders learn react link', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
