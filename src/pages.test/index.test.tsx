import { render, screen } from '@testing-library/react';

import Index from '@/pages/index';

describe('Index page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(<Index />);

      const heading = screen.getByRole('heading', {
        name: /Encuentra tú próximo auto/,
      });

      expect(heading).toBeInTheDocument();
    });

    it('should testid exist', () => {
      render(<Index />);

      const backgroundImage = screen.getByTestId('main-background');

      expect(backgroundImage).toBeInTheDocument();
    });

    it('should render image like bg', () => {
      render(<Index />);

      const backgroundImage = screen.getByTestId('main-background');

      expect(backgroundImage).toHaveClass('main-background');
    });
  });
});
