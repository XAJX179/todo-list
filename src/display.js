export const Display = (
  () => {
    function draw(projects, todos) {
      console.log(projects)
      console.log(todos)
    }

    return { draw }
  }
)()
