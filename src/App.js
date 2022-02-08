import Footer from "components/Footer";
import Header from "components/Header";
import AlbumFeature from "features/Album";
import Avatar from "features/Avatar";
import ColorBox from "features/ColorBox";
import CourseFeature from "features/Course";
import DigitalClock from "features/DigitalClock";
import MagicBox from "features/MagicBox";
import NewTodoFeature from "features/NewTodo";
import PostFeature from "features/Post";
import TodoFeature from "features/Todo";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
          marginInline: "auto",
        }}
      >
        <Switch>
          <Route path="/album" component={AlbumFeature}></Route>
          <Route path="/avatar" component={Avatar}></Route>
          <Route path="/colorbox" component={ColorBox}></Route>
          <Route path="/courses" component={CourseFeature}></Route>
          <Route path="/digital-clock" component={DigitalClock}></Route>
          <Route path="/magic-box" component={MagicBox}></Route>
          <Route path="/new-todo" component={NewTodoFeature}></Route>
          <Route path="/todo" component={TodoFeature}></Route>
          <Route path="/posts" component={PostFeature}></Route>
          <Redirect to="/album" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
