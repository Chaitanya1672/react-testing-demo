export const handlers = [
  {
    method: "GET",
    path: "https://jsonplaceholder.typicode.com/users",
    response: (req, res, ctx) => {
      return res(
        ctx.status(200), // HTTP status code
        ctx.json([{name: "chetan"}, {name: "ketan"}, {name: "niketan"}]) // Response body
      )
    },
  },
]
