import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

// Mock functions
const mockDispatch = jest.fn();
const mockSubmit = jest.fn();
const availableTimes = ["17:00", "18:00", "19:00"];

describe("BookingForm", () => {
  // --- Tests for HTML5 validation attributes ---
  test('Renders the "Choose date" label and input has "required" attribute', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("required");
  });

  test('Renders the "Choose time" label and select has "required" attribute', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );
    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute("required");
  });

  test('Renders the "Number of guests" label and input has correct attributes', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test('Renders the "Occasion" label and select has "required" attribute', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );
    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute("required");
  });

  // --- Tests for JavaScript validation logic ---

  test("Submit button is disabled when times are not available", () => {
    render(
      <BookingForm
        availableTimes={[]} // Pass empty array to simulate time not being selected
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );
    const submitButton = screen.getByRole("button", { name: /on click/i });
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is enabled when all fields are valid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );
    // With pre-filled date and useEffect setting time, the form should be valid initially
    const submitButton = screen.getByRole("button", { name: /on click/i });
    expect(submitButton).not.toBeDisabled();
  });

  test("Submit button is disabled if date is not selected", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );

    const submitButton = screen.getByRole("button", { name: /on click/i });
    const dateInput = screen.getByLabelText("Choose date");

    // Simulate user clearing the date input
    fireEvent.change(dateInput, { target: { value: "" } });

    expect(submitButton).toBeDisabled();
  });

  test("Submit button is disabled if number of guests is less than 1", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );
    const submitButton = screen.getByRole("button", { name: /on click/i });
    const guestsInput = screen.getByLabelText("Number of guests");

    fireEvent.change(guestsInput, { target: { value: "0" } });
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is disabled if number of guests is greater than 10", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    );
    const submitButton = screen.getByRole("button", { name: /on click/i });
    const guestsInput = screen.getByLabelText("Number of guests");

    fireEvent.change(guestsInput, { target: { value: "11" } });
    expect(submitButton).toBeDisabled();
  });
});
