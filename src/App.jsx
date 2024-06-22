import { useState } from "react"
import ModalContext from "./context/modalContext"
import { routes } from "./routes/routes"
import { RouterProvider } from "react-router-dom"
import { modalContextInitialState } from "./utils/contextInitialState"

function App() {
    const [showModal, setShowModal] = useState(modalContextInitialState)
    return (
        <ModalContext.Provider value={[showModal, setShowModal]}>
            <RouterProvider router={routes} />
        </ModalContext.Provider>
    )
}

export default App













// import React from 'react';
// import Navigation from './components/Navigation';
// import Projects from './components/Projects';
// import Footer from './components/Footer';
// import Profile from './components/Profile';
// import Header from './components/Header';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Create } from '@mui/icons-material';

// export default function App() {
//     return (
//         <ThemeProvider theme={theme}>
//           <CreateTheme theme={theme} />
//             <CssBaseline />
//             <Header />
//             <Navigation />
//             <Projects />
//             <Footer />
//             <Profile />
//             <Stack direction="row" gap={8}>
//                 <ColorShowcase color="primary" />
//                 <ColorShowcase color="secondary" />
//             </Stack>
//         </ThemeProvider>
//     );
// }
