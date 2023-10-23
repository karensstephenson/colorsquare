const InputBox = ( {bgColor, setBgColor}) => {

  return (
    <form onSubmit={(e) => e.preventDefault}>
        <label htmlFor="colorBox">Add color name</label>
        <input
            autoFocus 
            id="colorBox"
            type="text" 
            placeholder="Add color name"
            required
            value={bgColor}
            onChange={(e)=>setBgColor(e.target.value)}
        />
    </form>
  )
}

export default InputBox