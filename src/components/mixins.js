export function Media(width = null, size = null, propObj = []) {
  return `@media (${width}: ${size}){
    ${propObj};  
  }`
}