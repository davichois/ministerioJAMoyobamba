import Image from "next/image";
import { BiLogoFacebookCircle, BiLogoInstagramAlt } from "react-icons/bi";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <Image
          className="rounded-sm"
          width={250}
          height={250}
          src={
            "https://sabbath-school.adventech.io/api/v2/en/quarterlies/2024-04-cq/cover.png"
          }
          alt=""
        />
        <div className="flex flex-col">
          <div className="mt-4 text-sm text-gray-600">
            OCTUBRE - NOVIEMBRE - DICIEMBRE
          </div>
          <p className="text-sm font-semibold text-[#2E5797]">2024</p>
        </div>
        <div className="mt-4 space-y-2 text-sm">
          <div className="font-semibold">Publicidad</div>
          <AdBanner
            dataAdFormat="auto"
            dataFullWidthResponsive={true}
            dataAdSlot="2421239735"
          />
        </div>
      </div>
      <div className="md:w-2/3">
        <h2 className="text-4xl font-extrabold mb-4 text-[#2E5797]">
          Lecciones
        </h2>
        <div className="flex gap-3">
          <Link href="https://www.facebook.com/JA.moyobamba" target="_blank">
            <BiLogoFacebookCircle className="text-xl text-[#2E5797] cursor-pointer" />
          </Link>
          <Link
            href="https://www.instagram.com/ministerio.ja.moyobamba/"
            target="_blank"
          >
            <BiLogoInstagramAlt className="text-xl text-[#2E5797] cursor-pointer" />
          </Link>
        </div>
        <div className="mt-8 space-y-6">
          {[
            {
              number: 1,
              title: "Dios encarnado",
              date: "Sep 28 - Oct 04",
              pdf: "https://files.recursos-biblicos.com/Escuela%20Sabatica/Universitarios/4to2024/ABSG-2024-04-ES-CQ-01.pdf",
            },
            {
              number: 2,
              title: "Jesucristo inicia su ministerio",
              date: "Oct 05 - Oct 11",
              pdf: "https://files.recursos-biblicos.com/Escuela%20Sabatica/Universitarios/4to2024/ABSG-2024-04-ES-CQ-02.pdf",
            },
            {
              number: 3,
              title: "Una entrevista secreta",
              date: "Oct 12 - Oct 18",
              pdf: "https://files.recursos-biblicos.com/Escuela%20Sabatica/Universitarios/4to2024/ABSG-2024-04-ES-CQ-03.pdf",
            },
            {
              number: 4,
              title: "La ciudad de Sicar",
              date: "Oct 19 - Oct 25",
              pdf: "https://files.recursos-biblicos.com/Escuela%20Sabatica/Universitarios/4to2024/ABSG-2024-04-ES-CQ-04.pdf",
            },
            {
              number: 5,
              title: "Empiezan los conflictos",
              date: "Oct 26 - Nov 01",
              pdf: "https://files.recursos-biblicos.com/Escuela%20Sabatica/Universitarios/4to2024/ABSG-2024-04-ES-CQ-05.pdf",
            },
            {
              number: 6,
              title: "Sanidad a los ciegos",
              date: "Nov 02 - Nov 08",
              pdf: "https://files.recursos-biblicos.com/Escuela%20Sabatica/Universitarios/4to2024/ABSG-2024-04-ES-CQ-06.pdf",
            },
            {
              number: 7,
              title: "Resucitando a los muertos",
              date: "Nov 09 - Nov 15",
              pdf: "https://files.recursos-biblicos.com/Escuela%20Sabatica/Universitarios/4to2024/ABSG-2024-04-ES-CQ-07.pdf",
            },
            {
              number: 8,
              title: "A la sombra de la cruz",
              date: "Nov 16 - Nov 22",
              pdf: "https://files.recursos-biblicos.com/Escuela%20Sabatica/Universitarios/4to2024/ABSG-2024-04-ES-CQ-08.pdf",
            },
            {
              number: 9,
              title: "La preparación de los discípulos",
              date: "Nov 23 - Nov 29",
              pdf: "https://files.recursos-biblicos.com/Escuela%20Sabatica/Universitarios/4to2024/ABSG-2024-04-ES-CQ-09.pdf",
            },
            {
              number: 10,
              title: "El discurso de despedida",
              date: "Nov 30 - Dec 06",
              pdf: "https://files.recursos-biblicos.com/Escuela%20Sabatica/Universitarios/4to2024/ABSG-2024-04-ES-CQ-10.pdf",
            },
            {
              number: 11,
              title: "La hora ha llegado",
              date: "Dec 07 - Dec 13",
              pdf: "https://files.recursos-biblicos.com/Escuela%20Sabatica/Universitarios/4to2024/ABSG-2024-04-ES-CQ-11.pdf",
            },
            {
              number: 12,
              title: "Condenación y crucifixión",
              date: "Dec 14 - Dec 20",
              pdf: "https://files.recursos-biblicos.com/Escuela%20Sabatica/Universitarios/4to2024/ABSG-2024-04-ES-CQ-12.pdf",
            },
            {
              number: 13,
              title: "La resurrección y la comisión",
              date: "Dec 21 - Dec 27",
              pdf: "https://files.recursos-biblicos.com/Escuela%20Sabatica/Universitarios/4to2024/ABSG-2024-04-ES-CQ-13.pdf",
            },
          ].map((lesson) => (
            <div key={lesson.number} className="flex items-start">
              <div className="text-4xl font-bold text-[#c3c6cd] mr-4">
                {lesson.number}
              </div>
              <div>
                <Link
                  href={lesson.pdf}
                  target="_blank"
                  className="text-xl font-semibold text-[#2E5797] hover:underline hover:underline-offset-4 hover:cursor-pointer"
                >
                  {lesson.title}
                </Link>
                <p className="text-sm font-normal text-[#c3c6cd]">
                  {lesson.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
