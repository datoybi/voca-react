import { useParams } from "react-router-dom" // 파라미터 가져오는 메소드
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
    const {id} = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${id}`);

    return <>
        <h2>Day {id}</h2>
        {words.length === 0 && <span>Loading...</span>}
        <table>
            <tbody>
                {words.map(word => (
                   <Word word={word} key={word.id} />
                ))}
            </tbody>
        </table>
    </>
}