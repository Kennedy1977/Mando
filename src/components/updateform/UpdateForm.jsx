import React, { useRef } from "react";
import { Button } from "../shared.styles";
import {
  FormContainer,
  FieldContainer,
  ButtonAlignmentContainer,
  Error,
} from "./styles";

const toggleErrorMessage = (toggle) => {
  const hiddenElements = document.querySelectorAll(".error");

  hiddenElements.forEach((element) => {
    toggle === "hide"
      ? element.classList.add("hidden")
      : element.classList.remove("hidden");
  });
};

function UpdateForm() {
  const nameRef = useRef(null);
  const bioRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const bio = bioRef.current.value;

    if (name === "" || bio === "") {
      toggleErrorMessage("show");
    } else {
      toggleErrorMessage("hide");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FieldContainer>
        <label>Name</label>
        <input name="name" type="text" ref={nameRef} />
        <Error className="error hidden">
          You must enter your name to update your details.
        </Error>
      </FieldContainer>
      <FieldContainer>
        <label>Bio</label>
        <ButtonAlignmentContainer>
          <textarea name="bio" ref={bioRef}></textarea>
          <Button type="submit">Submit</Button>
        </ButtonAlignmentContainer>

        <Error className="error hidden">
          You must enter a bio to update your details.
        </Error>
      </FieldContainer>
    </FormContainer>
  );
}

export default UpdateForm;
