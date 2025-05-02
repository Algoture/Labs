import {
  Aperture,
  Briefcase,
  Calculator,
  Calendar,
  Shield,
  Search,
  User,
} from "lucide-react";
const elements = [
  { icon: <Calendar />, name: "Calendar" },
  { icon: <Calculator />, name: "Calculator" },
  { icon: <Aperture />, name: "Photo" },
  { icon: <Shield />, name: "Security" },
  { icon: <User />, name: "User" },
  { icon: <Briefcase />, name: "Work" },
];
function Glass() {
  return (
    <main className="cen h-screen">
      <div className="min-w-72 p-4 glass rounded-[20px]">
        <div className="my-2 mb-2 flex items-center bg-white/10 outline-none w-full rounded-md gap-2 p-1">
          <Search className="text-gray-300 size-5 pl-1" />
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent text-gray-50 outline-none w-full rounded-md"
          />
        </div>
        <ul className="flex flex-col gap-1 mb-2">
          <p className="text-sm px-1 text-gray-400">Suggestions</p>
          {elements.slice(0, 3).map((el) => {
            return (
              <li
                key={el.name}
                className="cursor-pointer flex hover:text-white hover:bg-black/15 text-gray-300/80 gap-2 rounded-md p-1 items-center">
                {el.icon}
                {el.name}
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col gap-1 border-t border-gray-100/20">
          <p className="text-sm px-1 text-gray-400 mt-1">Settings</p>
          {elements.slice(4).map((el) => {
            return (
              <li
                key={el.name}
                className="cursor-pointer flex hover:text-white hover:bg-black/15 text-gray-300/80 gap-2 rounded-md p-1 items-center">
                {el.icon}
                {el.name}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default Glass;
