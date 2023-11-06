import {renderHook, act} from "@testing-library/react"
import {useCounter} from "./useCounter"

describe("Counter", () => {
  test("should render the initial count 0", () => {
    const {result} = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })

  test("should increment and decrement by 1", () => {
    const {result} = renderHook(useCounter)
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(0)
  })

  test("should accept and render the same initial count", () => {
    const {result} = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    })
    expect(result.current.count).toBe(10)
  })

  test("should increment the count", () => {
    const {result} = renderHook(useCounter)
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })
  test("should increment the count", () => {
    const {result} = renderHook(useCounter)
    act(() => result.current.decrement())
    expect(result.current.count).toBe(-1)
  })
})
