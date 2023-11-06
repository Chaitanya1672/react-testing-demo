import {render, screen} from "@testing-library/react"
import {Greet} from "../greet/Greet"

test("greet renders message", () => {
  render(<Greet />)
  const text = screen.getByText(/Hello/i)
  expect(text).toBeInTheDocument()
})

describe("Greet", () => {
  test("renders message has name", () => {
    render(<Greet name="Vishwas" />)
    const name = screen.getByText(/Hello Vishwas/i)
    expect(name).toBeInTheDocument()
  })
})

// test.only || .skip('greet renders message has name', ()=>{ // will only run or skip this test
//   render(<Greet name='Vishwas'/>);
//   const name = screen.getByText(/Hello Vishwas/i)
//   expect(name).toBeInTheDocument()
// })

// it / fit || xit('greet renders message has name', ()=>{ // will only run(fit) or skip(xit) this test
//   render(<Greet name='Vishwas'/>);
//   const name = screen.getByText(/Hello Vishwas/i)
//   expect(name).toBeInTheDocument()
// })
