import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from '../../components/UserProfile';

test('Renders loading animation intially', () => {
	render(<UserProfile />);
	expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});

test('Renders user profile after loading', async () => {
	render(<UserProfile />);
	await waitFor(
		() => {
			expect(screen.queryByText(/Loading/i)).toBeNull();
		},
		{ timeout: 2000 }
	);

	const emailButton = await screen.findByRole('link', { name: /Email/i });
	const websiteButton = await screen.findByRole('link', { name: /Website/i });
	const heading = await screen.findByRole('heading');
	expect(heading).toBeInTheDocument();
	expect(emailButton).toBeInTheDocument();
	expect(websiteButton).toBeInTheDocument();
	expect(await screen.findByRole('img')).toBeInTheDocument();
});
