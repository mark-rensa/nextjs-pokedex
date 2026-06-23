"use client";

import { Switch } from "react-aria-components";

export default function Settings() {
  const settings = [
    { key: "reduceMotion", label: "Reduce motion", defaultSelected: true },
    {
      key: "enhanceContrast",
      label: "Enhance contrast",
      defaultSelected: false,
    },
    { key: "darkMode", label: "Enable dark mode", defaultSelected: false },
  ] as const;

  return (
    <div>
      <h1 className="mb-6 text-5xl">Settings</h1>
      <ul className="flex flex-col gap-3 text-3xl">
        {settings.map((setting) => (
          <li key={setting.key}>
            <Switch
              name={setting.key}
              value="true"
              defaultSelected={setting.defaultSelected}
              className="group inline-flex items-center gap-3 text-black"
            >
              <span className="flex h-7 w-12 items-center rounded-full border-2 border-black bg-black/25 p-0.5 transition-colors group-data-[disabled]:opacity-50 group-data-[selected]:bg-green-500">
                <span className="h-5 w-5 rounded-full bg-white transition-transform group-data-[pressed]:scale-95 group-data-[selected]:translate-x-5" />
              </span>
              <span>{setting.label}</span>
            </Switch>
          </li>
        ))}
      </ul>
    </div>
  );
}
