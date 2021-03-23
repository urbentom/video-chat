import React, { useEffect, useState } from 'react';

import { Auth, DataStore } from 'aws-amplify';
import { MutableModel } from '@aws-amplify/datastore';

type AuthContextProps = {
	user: string;
};

type AuthContextProviderProps = {
	children: any;
};

const initialAuthContextValues = {
	user: 'Tom',
};

const AuthContext = React.createContext<AuthContextProps>(
	initialAuthContextValues
);

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
	children,
}) => {
	const [user, setUser] = useState<string>('Not Tom');

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

export default AuthContext;
export { AuthContextProvider };
