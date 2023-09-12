import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Browse, SignIn, SignUp } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/browse" replace />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
};
