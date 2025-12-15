import { useEffect, useState } from "react";

import "./programs.css";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

function Programs() {
  const [dataProgram, setDataProgram] = useState<Program[]>([]);

  useEffect(() => {
    const getData = () => {
      fetch("http://localhost:3310/api/programs")
        .then((res) => res.json())
        .then((data: Program[]) => setDataProgram(data))
        .catch((err) => console.error(err));
    };

    getData();
  }, []);

  return (
    <section className="programsListSection">
      <h1>Liste des séries</h1>
      <div className="programList">
        {dataProgram.map((program) => (
          <article key={program.id} className="programCard">
            <img src={program.poster} alt="{program.title}" />
            <p>{program.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Programs;
