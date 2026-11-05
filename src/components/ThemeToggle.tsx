"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon } from "@phosphor-icons/react/Moon";
import { SunIcon } from "@phosphor-icons/react/Sun";
import Button from "./ui/Button";

const themeKey = "linktagdemo-theme";
const themeEvent = "linktagdemo-theme-change";

function subscribeTheme(onChange: () => void) {
  function onStorage(event: StorageEvent) {
    if (event.key === themeKey || event.key === null) {
      try {
        document.documentElement.dataset.theme = localStorage.getItem(themeKey) === "dark" ? "dark" : "light";
      } catch { /* The theme toggle still works when storage is unavailable. */ }
      onChange();
    }
  }
  window.addEventListener(themeEvent, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(themeEvent, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function readTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, readTheme, () => "light");

  function toggleTheme() {
    const next = readTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(themeKey, next); } catch { /* Keep the current session usable. */ }
    window.dispatchEvent(new Event(themeEvent));
  }

  return (
    <Button className="lt-button theme-button" variant="outline" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>
      {theme === "light" ? <MoonIcon size={19} /> : <SunIcon size={19} />}
    </Button>
  );
}
