const App = () => {
  let name = 'aimal'
  let a = 10
  let b = 15
  let arr = ['aimal', 'kamil', 'asad', 'hamza']
  return (
    <>
      <div className="text-5xl">Hello {name}</div>
      <p>Sum of {a} and {b} is {a + b}</p>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App