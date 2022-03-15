import dummy from "../db/data.json"
import { useParams } from "react-router-dom" // 파라미터 가져오는 메소드
import Word from "./Word";

export default function Day() {
    // dummy.words
    const {id} = useParams();
    const wordList = dummy.words.filter(word => (word.day === Number(id)))
    console.log(id)
    console.log(wordList)
    return <>
        <h2>Day {id}</h2>
        <table>
            <tbody>
                {wordList.map(word => (
                   <Word word={word} key={word.id} />
                ))}
            </tbody>
        </table>
    </>
}