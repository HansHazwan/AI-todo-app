import { PlusIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { TaskToolbarProps } from "./TaskToolbar.type";
import Styles from "./TaskToolbar.module.css"

export function TaskToolbar({ newActionButton, searchActionButton }: TaskToolbarProps) {
  const [search, setSearch] = useState("");

  return (
    <header className={Styles.bar}>
      <div className={Styles.newContainer}>
        <button onClick={() => { newActionButton() }} className={Styles.newButton}>
          <p>New</p>
          <PlusIcon />
        </button>
      </div>
      <div className={Styles.searchContainer}>
        <button onClick={() => {
          searchActionButton(search);
        }}>
          <SearchIcon />
        </button>
        <input
          type={"text"}
          value={search}
          onChange={(message: React.ChangeEvent<HTMLInputElement>) => setSearch(message.target.value)} />
      </div>
    </header>
  );
}
