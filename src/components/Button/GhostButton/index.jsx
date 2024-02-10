
export function GhostButton(props){

  return(
    <button 
    className="ghost-button"
    style={{
      border: "none",
      color: props.color,
      padding: props.padding,
      background: "none",
      color: props.color,
      fontWeight: "bold",

    }}>
      {props.text}
      
    </button>
  )
}