import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm/>);
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm/>);

  const name = screen.queryByLabelText(/First Name:/i);
  const last = screen.queryByLabelText(/Last Name:/i);
  const address = screen.queryByLabelText(/Address:/i);
  const city = screen.queryByLabelText(/City:/i);
  const state = screen.queryByLabelText(/State:/i);
  const zip = screen.queryByLabelText(/Zip:/i);
  const checkout = screen.queryByRole('button');
  
  userEvent.type(name, 'Joe');
  userEvent.type(last, 'Stanton');
  userEvent.type(address, '160 Fake St');
  userEvent.type(city, 'Philadelphia');
  userEvent.type(state, 'Pennsylvania');
  userEvent.type(zip, '12345');
  userEvent.click(checkout);

  const success = await screen.findByTestId('successMessage');
  expect(success).toBeInTheDocument();
  expect(success).toBeTruthy();
  expect(success).not.toBeNull();

});
