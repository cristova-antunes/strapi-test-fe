import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//Pages
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import ReviewDetails from "./pages/ReviewDetails";

//Components
import SiteHeader from "./components/SiteHeader";

//Apollo client
const client = new ApolloClient({
  uri: "https://objective-feynman-60d794.netlify.app/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<ReviewDetails />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
