import globe from '../assets/globe.png'

export default function Header() {
    return (
        <header className="flex justify-center items-center gap-4">
            <img src={globe} alt="globe"/>
            <span>My Travel Journal</span>
        </header>
    )
}