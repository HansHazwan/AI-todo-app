import { LogOut } from "lucide-react";
import { HeaderProps } from "./Header.types";
import Styles from "./Header.module.css"

export function Header({ title, onRightClick }: HeaderProps) {
  return (
    <header className={Styles.header}>
      <div>
      </div>
      <div className={Styles.center}>
        <h2>{title}</h2>
      </div>
      <div className={Styles.right}>
        {
          onRightClick && (
            <button className={Styles.rightButton}>
              <LogOut />
            </button>
          )
        }
      </div>
    </header>
  );
}
