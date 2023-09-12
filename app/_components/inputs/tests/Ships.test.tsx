import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { SystemForm } from '@/app/_types/system';
import { ChakraProvider } from '@chakra-ui/react';
import ShipsField from '../Ships';

describe('Systems Field', () => {
  beforeEach(() => {
    const Component = () => {
      const { control } = useForm<SystemForm>();

      return (
        <ChakraProvider>
          <ShipsField control={control} />
        </ChakraProvider>
      );
    };

    render(<Component />);
  });

  it('renders', () => {
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
