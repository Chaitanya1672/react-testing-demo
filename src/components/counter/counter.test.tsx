import React from "react"
import {render, screen, act, fireEvent} from "@testing-library/react"
import {Counter} from "./Counter"
import user from "@testing-library/user-event"
import {AppProviders} from "../../providers/AppProvider"

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />)
    // render(<Counter/>,{wrapper: AppProviders})
    const countEle = screen.getByRole("heading")
    expect(countEle).toBeInTheDocument()

    const incrementBtn = screen.getByRole("button", {
      name: "Increment",
    })
    expect(incrementBtn).toBeInTheDocument()
  })

  test("renders a count of 0", () => {
    render(<Counter />)
    const countElement = screen.getByRole("heading")
    expect(countElement).toHaveTextContent("0")
  })

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole("button", {name: "Increment"})
    // let countElement
    await act(async () => {
      await user.click(incrementButton)
    })
    // await user.click(incrementButton)
    let countElement = screen.getByRole("heading")
    expect(countElement).toHaveTextContent("1")
  })

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole("button", {name: "Increment"})
    await act(async () => {
      await user.dblClick(incrementButton)
    })

    const countElement = screen.getByRole("heading")
    expect(countElement).toHaveTextContent("2")
  })

  test("rendres a count of 10 after clicking the set button", async () => {
    user.setup()
    render(<Counter />)
    const amountInput = screen.getByRole("spinbutton")
    await act(async () => {
      await user.type(amountInput, "10")
    })

    expect(amountInput).toHaveValue(10)
    const setButton = screen.getByRole("button", {name: "Set"})
    await act(async () => {
      await user.click(setButton)
    })

    const countElement = screen.getByRole("heading")
    expect(countElement).toHaveTextContent("10")
  })

  test("increment button is clicked", () => {
    const {getByText} = render(<Counter />)

    const incrementButton = getByText("Increment")

    fireEvent.click(incrementButton)

    const countElement = screen.getByRole("heading")
    expect(countElement).toHaveTextContent("1")
  })
  test("increment button is clicked", () => {
    const incrementFunc = jest.fn()
    const {getByText} = render(<Counter />)

    const incrementButton = getByText("Increment")

    fireEvent.click(incrementButton)

    const countElement = screen.getByRole("heading")
    expect(countElement).toHaveTextContent("1")
  })
})
