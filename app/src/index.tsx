import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import ViewUrl from "./views/view-url";
import SecureUrl from "./views/secure-url";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <App />
        <Routes>
            <Route path="/" element={<SecureUrl />}>
            </Route>
            <Route>
                <Route path="view-url">
                    <Route path=":urlid" element={<ViewUrl />} />
                </Route>
            </Route>
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />

        </Routes>
    </BrowserRouter>,
    rootElement
);