import Nav from "components/Nav";
import Logo from "components/Logo";
import { PageHeader } from "./Header.styled";

export default function Header() {
    return (
        <PageHeader>
            <Logo />
            <Nav />
        </PageHeader>
    )
}