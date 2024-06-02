import { redirect } from '@sveltejs/kit';

export const GET = ({ locals }) => {
	if (!locals.pb.authStore.isValid) throw redirect(303, '/login');
    throw redirect(303, '/home');
};
