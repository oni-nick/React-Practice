import useFetch from "./hooks/useFetch";
import World from "./Word";

export default function AllWords(){
    const words = useFetch("http://localhost:3001/words")

    return(<>
        <h2> 모든 단어 보기</h2>
        <table>
            <tbody>
                {words.map(word =>(
                    <World word={word} key={word.id}></World>
                ))}
            </tbody>
        </table>
    
    </>
    );
}