import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders header and hero section', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header is a banner
    expect(screen.getByRole('heading', { name: /Hi, I'm Mohit Kumar/i })).toBeInTheDocument(); // Hero heading
    expect(screen.getByText(/Skip to main content/i)).toBeInTheDocument();
  });
});
