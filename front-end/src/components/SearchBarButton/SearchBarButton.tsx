import { SearchIcon } from "lucide-react";
import Styles from "./SearchBarButton.module.css";
import { SearchBarButtonProps } from "./SearchBarButton.type";

export function SearchBarButton({ onClick }: SearchBarButtonProps) {
  return (
    <button
      className={Styles.button}
      onClick={onClick}
    >
      <SearchIcon />
    </button>
  );
}
