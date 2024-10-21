import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders router app', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders HamburgerMenu component', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const hamburgerMenuElement = screen.getByTestId('hamburger-menu');
  expect(hamburgerMenuElement).toBeInTheDocument();
});

test('renders Navbar component', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const navbarElement = screen.getByTestId('navbar');
  expect(navbarElement).toBeInTheDocument();
});
