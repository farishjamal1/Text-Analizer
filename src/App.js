import React from 'react'
import Navbar from './components/Navbar'
import Textarea from './components/Textarea'

function App() {
    return (
        <>
            <Navbar title="Text Utils" aboutText="About Us" />
            <div className="container my-5">
                <Textarea heading="Enter Text to analize"/>
            </div>
        </>
    )
}

export default App
