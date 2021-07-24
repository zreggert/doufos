import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Map from './components/Map'
import Signup from "./components/Signup";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <style scoped>{headerbackground}</style>
          <div className="backimage background">
            <Header />
            <Navtop />
            <Route exact path="/info">
              <Insight />
            </Route>
            <Route exact path="/map">
              <Map />
            </Route>
          </div>
          <Navbot />
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
