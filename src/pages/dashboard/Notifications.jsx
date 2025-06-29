// src/pages/dashboard/Notifications.jsx

export default function Notifications() {
  return (
    <div className="pt-24 px-6 text-white max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🔔 Notifications</h1>
      <ul className="space-y-4">
        <li className="bg-white/10 p-4 rounded-lg border border-white/20">
          ✅ Your application to "Frontend Developer at Zidio" was viewed.
        </li>
        <li className="bg-white/10 p-4 rounded-lg border border-white/20">
          🕒 Reminder: Complete your profile to increase visibility.
        </li>
        <li className="bg-white/10 p-4 rounded-lg border border-white/20">
          📣 New job match: "React Intern at BlueTech"
        </li>
      </ul>
    </div>
  );
}
