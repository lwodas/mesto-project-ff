const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  };
  
  const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = "";
  };
  
  const isValid = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        config
      );
    } else {
      hideInputError(formElement, inputElement, config);
    }
  };
  
  const setEventListeners = (formElement, config) => {
    const inputList = Array.from(
      formElement.querySelectorAll(config.inputSelector)
    );
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
  
    toggleButtonState(inputList, buttonElement, config);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        isValid(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement, config);
      });
    });
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  const toggleButtonState = (inputList, buttonElement, config) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(config.inactiveButtonClass);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(config.inactiveButtonClass);
    }
  };
  
  export const enableValidation = (config) => {
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    forms.forEach((formElement) => {
      setEventListeners(formElement, config);
    });
  };
  
  export const clearValidation = (formElement, config) => {
    const inputs = Array.from(formElement.querySelectorAll(config.inputSelector));
    const submitBtn = formElement.querySelector(config.submitButtonSelector);
    inputs.forEach((inputElement) => {
      hideInputError(formElement, inputElement, config);
    });
    toggleButtonState(inputs, submitBtn, config);
  };