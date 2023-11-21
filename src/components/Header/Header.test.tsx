import { render, screen } from '@testing-library/react';

import Header from '@/components/Header/Header';

describe('Header Component', () => {
  describe('render a header component', () => {
    it('should render without crashing', () => {
      render(<Header />);
      expect(screen.getByText('Login')).toBeInTheDocument();
    });
  });
});
