import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Featured from './components/Featured';
import { Wrapper } from './Assets/Global.style';
import List from './components/List';
import Header from './components/Header';

function App() {
  const client = new ApolloClient({
    uri: 'https://becoming-quetzal-77.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
      'x-hasura-admin-secret':
        'SYZoQliLNK2G3jacLd2JGbYN96qNN1bZAa8hqVB1gn5qhnaJfHGnS3XI8iAUYW4p',
    },
  });

  return (
    <ApolloProvider client={client}>
      <Wrapper>
        <div className="App">
          <Header />
          <Featured />
          <List />
        </div>
      </Wrapper>
    </ApolloProvider>
  );
}

export default App;
