import {render, screen} from "@testing-library/react"
import {Skills} from "../skills/Skills"

describe("Skills", () => {
  const skills = ["Javascript", "HTML", "CSS"]
  test("render successfully", () => {
    render(<Skills skills={skills} />)
    const listEle = screen.getByRole("list")
    expect(listEle).toBeInTheDocument()
  })

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />)
    const allListEle = screen.getAllByRole("listitem")
    expect(allListEle).toHaveLength(skills.length)
  })

  test("Login button is displayed", () => {
    render(<Skills skills={skills} />)
    const startBtn = screen.getByRole("button", {name: "Login"})
    expect(startBtn).toBeInTheDocument()
  })
  test("start learning button is not displayed", () => {
    render(<Skills skills={skills} />)
    const startBtn = screen.queryByRole("button", {name: "Start learning"})
    expect(startBtn).not.toBeInTheDocument()
  })
  test("start learning button is displayed eventually", async () => {
    // screen.debug()
    const view = render(<Skills skills={skills} />)
    // logRoles(view.container)
    const startBtn = await screen.findByRole(
      "button",
      {name: "Start learning"},
      {timeout: 2000}
    )
    // screen.debug()
    expect(startBtn).toBeInTheDocument()
  })
})
