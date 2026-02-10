import { pad2 } from "./utils.js";

function toICSDate(date) {
  // date: JS Date (local)
  const yyyy = date.getFullYear();
  const mm = pad2(date.getMonth() + 1);
  const dd = pad2(date.getDate());
  const hh = pad2(date.getHours());
  const min = pad2(date.getMinutes());
  // floating time (sem Z) para simplicidade
  return `${yyyy}${mm}${dd}T${hh}${min}00`;
}

export function downloadICS({ title, start, durationMinutes = 120, location, description }) {
  const dtStart = toICSDate(start);
  const end = new Date(start.getTime() + durationMinutes * 60 * 1000);
  const dtEnd = toICSDate(end);
  const uid = `${Date.now()}@galo-grow`;

  const safe = (s) =>
    String(s || "")
      .replaceAll("\\", "\\\\")
      .replaceAll(",", "\\,")
      .replaceAll(";", "\\;")
      .replaceAll("\n", "\\n");

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Galo Grow//Agenda//PT-BR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${safe(title)}`,
    `LOCATION:${safe(location)}`,
    `DESCRIPTION:${safe(description)}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "galo-grow-show.ics";
  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);
}