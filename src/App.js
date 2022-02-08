import Footer from "components/Footer";
import Header from "components/Header";
import AlbumFeature from "features/Album";
import Avatar from "features/Avatar";
import ColorBox from "features/ColorBox";
import CourseFeature from "features/Course";
import DigitalClock from "features/DigitalClock";
import MagicBox from "features/MagicBox";
import NewTodoFeature from "features/NewTodo";
import NotFound from "features/NotFound";
import PostFeature from "features/Post";
import TodoFeature from "features/Todo";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./config.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          padding: "110px 15px",
          margin: "80px auto 0",
        }}
      >
        <Switch>
          <Route path="/album" component={AlbumFeature} exact></Route>
          <Route path="/avatar" component={Avatar} exact></Route>
          <Route path="/colorbox" component={ColorBox} exact></Route>
          <Route path="/courses" component={CourseFeature} exact></Route>
          <Route path="/digital-clock" component={DigitalClock} exact></Route>
          <Route path="/magic-box" component={MagicBox} exact></Route>
          <Route path="/new-todo" component={NewTodoFeature} exact></Route>
          <Route path="/todo" component={TodoFeature} exact></Route>
          <Route path="/posts" component={PostFeature}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
