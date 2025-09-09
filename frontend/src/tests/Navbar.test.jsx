import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Check for the main brand link
    expect(screen.getByText('DGP')).toBeInTheDocument();

    // Check for the page links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Colleges')).toBeInTheDocument();
    expect(screen.getByText('Courses')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
