import style from './index.module.css'

export function FilledButton({text, color, padding }){

  return(
    <button 
      className={style.filledButton}
      style={{
        color: color,
        padding: padding,
        fontWeight: "bold",
  
      }}>
        {text}
    </button>
  )
}