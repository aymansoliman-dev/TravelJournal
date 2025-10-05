import Entry from "./Entry.jsx";
import data from "../data.json"

export default function MainContent() {

    const entryElements = data.map(props => <Entry key={props.id} {...props} />)

    return (
        <main className="flex flex-col py-8 gap-8 align-center">
            {entryElements}
        </main>
    )
}