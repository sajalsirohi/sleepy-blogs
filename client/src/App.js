import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing/landing.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import PostPage from "./pages/post/post.component";
import SignUpPage from "./pages/signup/signup.page.component";
import UserPage from "./pages/user/user.page.component";
import CreatePostPage from "./pages/create-post/create-post.component";
import AllPostPage from "./pages/all-posts/all-posts.component";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={LandingPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/posts" component={AllPostPage}/>
        <Route path="/posts/:postId" component={PostPage} />
        <Route exact path="/user" component={UserPage}/>
        <Route exact path="/user/:userId/createPost" component={CreatePostPage}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
