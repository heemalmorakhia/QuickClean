import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import FaqPage from "./pages/faqpage";
import "./App.css";
import Contact from "./pages/contact.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import EditProfile from "./pages/editProfile";
import Booking from "./pages/booking";
import Scheduling from "./pages/scheduling";
import Payment from "./pages/payment";
import MyBookings from "./pages/myBookings";

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
      <div className="App">
        <Router>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/faqs" element={<FaqPage />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking/scheduling" element={<Scheduling />} />
            <Route path="/booking/scheduling/payment" element={<Payment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />

            {/* set up pages for other routes similarly. home page is "/" */}
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
