import {render, screen} from "@testing-library/react"
import {Application} from "../application/Application"

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />)

    const paragraphText = screen.getByText("All fields are mandatory")
    expect(paragraphText).toBeInTheDocument()

    const spanTitle = screen.getByTitle("close")
    expect(spanTitle).toBeInTheDocument()

    const idText = screen.getByTestId("custom-element")
    expect(idText).toBeInTheDocument()

    const imgAltText = screen.getByAltText("a person with a laptop")
    expect(imgAltText).toBeInTheDocument()

    const nameEle = screen.getByRole("textbox", {
      name: "Name",
    })
    expect(nameEle).toBeInTheDocument()

    const nameEle2 = screen.getByLabelText("Name", {
      selector: "input",
    })
    expect(nameEle2).toBeInTheDocument()

    const nameWithPlaceholder = screen.getByPlaceholderText("Fullname")
    expect(nameWithPlaceholder).toBeInTheDocument()

    const nameWithValue = screen.getByDisplayValue("Vishwas")
    expect(nameWithValue).toBeInTheDocument()

    const bioEle = screen.getByRole("textbox", {
      name: "Bio",
    })
    expect(bioEle).toBeInTheDocument()

    const jobLocationEle = screen.getByRole("combobox")
    expect(jobLocationEle).toBeInTheDocument()

    const termsEle = screen.getByRole("checkbox")
    expect(termsEle).toBeInTheDocument()

    const termsEle2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    )
    expect(termsEle2).toBeInTheDocument()

    const submitEle = screen.getByRole("button")
    expect(submitEle).toBeInTheDocument()
  })
})
