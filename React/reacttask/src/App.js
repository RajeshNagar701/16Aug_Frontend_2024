import Class_component from "./Component/Class_component";
import Func_component from "./Component/Func_component";
import React_css from "./CSS/React_css";
import Main_Jsx from "./Jsx/Main_Jsx";
import Main_layout from "./Layout/Main_layout";
import Module_css from "./Module_css/Module_css";
import Class_props from "./props/Class/Class_props";
import Func_props from "./props/Func/Func_props";
import Sass_css from "./Sass_css/Sass_css";
import Main_classstate from "./state/Class/Main_classstate";
import Main_funcstate from "./state/Func/Main_funcstate";
import Home from "./Website/pages/Home";



/*
Download & use Extension in React 

es7 + react
JavaScript and React/Redux snippets in ES7+ with Babel plugin features for VS Code
Short code for program 
imr    : import react
imrc : import react with component

rfce : create function component
rce : create class component
rcc :  create class component with export
rcep  : create class component with proptype

*/
function App() {
  return (
    <div className="container mt-5"> 
      {
        //<Main_layout/>
        //<Main_Jsx/>

        // Component Types

        //<Func_component/>
        //<Class_component/>


        //website
        //<Home/>


        //Props
        //<Func_props/>
        //<Class_props/>

        // css
        //<React_css/>
        //<Module_css/>
        //<Sass_css/>

        //state

        <Main_funcstate/>
        //<Main_classstate/>

      }
     
    </div>
  );
}

export default App;
