import { render, screen } from '@testing-library/react';
import UserProfile from '../../components/UserProfile';

describe('User', () => {
	test('renders loading initially', () => {
		render(<UserProfile />);
		expect(screen.getByText(/Loading/i)).toBeInTheDocument();
	});
	test('renders user details', async () => {
		render(<UserProfile />);
		const name = await screen.findByRole('heading');
		const userName = await screen.getByText(/testUser/i);
		const emailButton = await screen.findByRole('link', { name: /Email/i });
		const websiteButton = await screen.findByRole('link', { name: /Website/i });
		expect(name).toHaveTextContent(/John Doe/i);
		expect(userName).toBeInTheDocument();
		expect(emailButton).toBeInTheDocument();
		expect(websiteButton).toBeInTheDocument();
	});
});
