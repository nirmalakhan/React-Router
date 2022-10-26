import React from "react";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='feedback' element={<Feedback />} />

            </Routes>

        </BrowserRouter>
    )
}