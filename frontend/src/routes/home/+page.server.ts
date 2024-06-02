import { serializeNonPOJOs } from '$lib/helpers';
import type DLAUser from '../../interfaces/dla_user.js';

export const load = async ({ locals }) => {
    const employee: DLAUser = await locals.pb.collection('dla_user').getOne('ua6pfcqf53phimk', {
        expand: 'isUser',
    })
    employee.user = employee.expand.isUser
	if (locals.pb.authStore.isValid) {
		return {
			employee: serializeNonPOJOs(employee)
		};
	}
};
