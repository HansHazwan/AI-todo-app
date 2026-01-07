export interface TaskListHeaderViewPromps {
  onTitleClick?: (state: "A-Z" | "Z-A") => void;
  onDateClick?: (state: "New-Old" | "Old-New") => void;
  onTickClick?: (state: "Tick-Untick" | "Untick-Tick") => void;
}
