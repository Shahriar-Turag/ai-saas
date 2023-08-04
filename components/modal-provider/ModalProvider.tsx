'use client';

import { useEffect, useState } from 'react';
import { ProModal } from '../proModal/ProModal';

export const ModalProvider = () => {
	const [isMounded, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounded) return null;

	return (
		<>
			<ProModal />
		</>
	);
};
