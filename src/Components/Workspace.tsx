import { useEffect, useState } from "react";
import { Node } from "../Classes/Node";
import { location } from "../Classes/DefaultFunctionals/Location";
function Workspace (props: { rootOrigin:Node })  {
    const [key, setKey] = useState(0)
    const DEFAULT_RADIUS = 77
    useEffect(() => {
        const handleClick = (event: { clientX: number; clientY: number; }) => {
            const newNode = new Node(new Date().toUTCString(),DEFAULT_RADIUS);
            newNode.addFunct(location(event.clientX,event.clientY))
            props.rootOrigin.addChild(newNode)
            setKey(key+1)
        }
        window.addEventListener('click', (e)=>{handleClick(e)});
        return () => {
            window.removeEventListener(
                'click',
                handleClick
            )
        }
    }, [key,props.rootOrigin])
    return (
        <div key={key}>
            {props.rootOrigin.children.map(node=><div key={node.id}>{node.functs.map(funct=><div key={"("+funct.application.x+","+funct.application.y+")"} style={{borderRadius:'50%',backgroundColor:'red',width:node.radius+'px',height:node.radius+'px',position:'absolute',top:(funct.application.y-(node.radius/2)),left:(funct.application.x-(node.radius/2))}}></div>)}</div>)}
        </div>
    )
}
export default Workspace