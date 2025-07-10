import { useNavigate } from "react-router-dom";

import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        // We use preventDefault() because Button is inside a form
        //  and clicking this button runs also submitting a form
        e.preventDefault();
        // -1 is to go one step back in URL history
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
