import { NavLink } from "react-router-dom";

const icons = {
  home: "🏠",
  calendar: "📅",
  message: "💬",
  store: "🏬",
  info: "ℹ️",
  settings: "⚙️",
};

export default function NavigationItem({ label, icon, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition
        ${
          isActive
            ? "bg-violet-600 text-white"
            : "text-gray-300 hover:bg-gray-800 "
        }`
      }
    >
      <span className="text-xl">{icons[icon] || "🔹"}</span>
      <span>{label}</span>
    </NavLink>
  );
}
