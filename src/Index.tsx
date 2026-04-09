import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Projects from "./components/Projects/Projects"

import "./App.css"

export default function Index() {
        
    return (
        <>
            <Home />

            <About />

            <Services />

            <Projects />

            <Contact />
        </>
    )
}