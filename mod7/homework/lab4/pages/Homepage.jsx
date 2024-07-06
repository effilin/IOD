
import CustomCard from "../components/customCard";
import EmojiChanger from "../components/emojiComponent";
import MenuAppBar from "../components/menuAppBar";

export default function Homepage() {
    return (
        <div className="Homepage">
            <h1>Home</h1>
            <MenuAppBar />
            <CustomCard title="Hibiscus">Hibiscus Flower</CustomCard>
            <EmojiChanger />
        </div>
    )
}