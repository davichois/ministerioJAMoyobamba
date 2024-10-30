"use client"; // Indicador de cliente en Next.js 13+

import Link from "next/link";

interface Lesson {
  number: number;
  title: string;
  date: string;
  pdf: string;
}

interface LessonListProps {
  lessons: Lesson[];
}

const LessonList: React.FC<LessonListProps> = ({ lessons }) => {
  const sendGTMEvent = (event: { event: string; value: string }) => {
    console.log("Evento GTM enviado:", event);
  };

  const handleClick = (name: string) => {
    sendGTMEvent({ event: "buttonClicked", value: name });
  };

  return (
    <div className="mt-8 space-y-6">
      {lessons.map((lesson) => (
        <div key={lesson.number} className="flex items-start">
          <div className="text-4xl font-bold text-[#c3c6cd] mr-4">
            {lesson.number}
          </div>
          <div>
            <Link
              href={lesson.pdf}
              target="_blank"
              className="text-xl font-semibold text-[#2E5797] hover:underline hover:underline-offset-4 hover:cursor-pointer"
              onClick={() => handleClick(lesson.title)} // Aquí se usa la función anónima
            >
              {lesson.title}
            </Link>
            <p className="text-sm font-normal text-[#c3c6cd]">{lesson.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonList;
