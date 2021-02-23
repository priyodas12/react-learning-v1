import React from 'react';

const userContext = React.createContext("Infoys");

const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;

export { UserProvider, UserConsumer }