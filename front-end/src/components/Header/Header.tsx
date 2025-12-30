import { HeaderProps } from "./Header.types";
import Styles from "./Header.module.css"

export function Header({ label }: HeaderProps) {
  return (
    <header className={Styles.header}>
      <h2>{label}</h2>
    </header>
  );
}
