import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import PropTypes from "prop-types";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );
  return isAuthenticated ? children : null;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
