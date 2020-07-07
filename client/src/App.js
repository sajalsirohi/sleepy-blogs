import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing/landing.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import PostPage from "./pages/post/post.component";
import SignUpPage from "./pages/signup/signup.page.component";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={LandingPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route path="/posts/:postId" component={PostPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
