import React, {Component} from "react";
import "./styles.css";
import "./bootstrap.css";

import FirstComponent from "./components/learning-components/FirstComponent.jsx";
import SecondComponent from "./components/learning-components/SecondComponent.jsx";
import ThirdComponent from "./components/learning-components/ThirdComponent.jsx";
import Counter from "./components/counter/Counter.jsx";
import ToDoApp from "./components/todo/ToDoApp.jsx"

class App extends Component {
  render() {
  return (
    <div className="App">
          {/*<Counter />*/}
          <ToDoApp />
    </div>
  );
  }
}


class LearningComponent extends Component {
  render(){
    return (
      <div className="learningComponent">
      <h1>Hello World</h1>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
    )
  }
};


export default App;