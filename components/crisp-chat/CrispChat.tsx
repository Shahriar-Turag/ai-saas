'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
	useEffect(() => {
		Crisp.configure('2fcbc3bd-d727-4044-bee9-0a47282fc7d1');
	}, []);

	return null;
};
