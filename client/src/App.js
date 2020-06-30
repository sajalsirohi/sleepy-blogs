import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing/landing.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import PostPage from "./pages/post/post.component";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={LandingPage} />
        <Route path="/posts/:postId" component={PostPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
