import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import MyState from "./context/data/MyState";
import { ProtectedRoute } from "./protectRoute/ProtectedRoute";

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </MyState>
  );
};

export default App;
