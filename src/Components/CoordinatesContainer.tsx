export const getCoordinates = () => window.location.search .slice(1) .split("&")
export default function CoordinatesContainer () {
    return <ul>{  getCoordinates()  .map( axis => {  return <li key={axis}>{  axis  }</li> }  )  }</ul>
}
