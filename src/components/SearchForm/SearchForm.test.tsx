import { render, screen } from '@testing-library/react';

import SearchForm from '@/components/SearchForm/SearchForm';

describe('Search Form', () => {
  describe('Render method', () => {
    it('should render component', () => {
      render(<SearchForm />);
      expect(screen.getByText('SearchForm')).toBeInTheDocument();
    });
  });
});
