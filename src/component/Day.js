import { useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch.js";
import Word from "./Word.js"
export default function Day(){
    
    
    const day = useParams().day;
    

    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    

    return ( <>
        <h2>Day {day} </h2>
        <table>
            <tbody>
               {words.map(word => (
                   <Word word={word} key={word.id}></Word>
               ))}
            </tbody>
        </table>


        </>
    );
}
