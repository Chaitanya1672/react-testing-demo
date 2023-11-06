import React from "react"
import "./App.css"

import {Counter} from "./components/counter/Counter.tsx"
import {Application} from "./components/greet/application/Application"
import {AppProviders} from "./providers/AppProvider.tsx"
import {Skills} from "./components/skills/Skills"
import {MuiMode} from "./components/mui-mode/MuiMode"

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application />     */}
        {/* <Skills skills={['HTML', 'CSS']} /> */}
        <Counter />
        {/* <MuiMode /> */}
      </div>
    </AppProviders>
  )
}

export default App
