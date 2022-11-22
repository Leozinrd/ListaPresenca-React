import Reac, { useState, useEffect } from "react";

import "./styles/container__lista-presenca.css";
import "./styles/container__presenca__pessoa.css";

import AttendanceList, {
  CardProps,
} from "../../components/Card/Attendence-list";

type User = {
  name: string;
  avatar: string;
};

function Homepage() {
  const [studentName, setStudentName] = useState();
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString(
        "pt-br",
        {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }
        // key: Number
      ),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  useEffect(() => {
    fetch("https://api.github.com/users/leozinrd")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      });
  }, []);

  return (
    <>
      <div className="container__ListaPresenca">
        <header className="ListaPresenca__cabecalho">
          <h1 className="ListaPresenca__titulo">Lista de Presença</h1>
          <div className="leonardoGithub">
            <strong>{user.name}</strong>
            <img src={user.avatar} alt="Foto de perfil" />
          </div>
        </header>

        <div className="button--lista__presenca">
          <input
            type="text"
            placeholder="Digite seu nome..."
            onChange={(e) => setStudentName(e.target.value)}
          />
          <button type="submit" onClick={handleAddStudent}>
            Adicionar
          </button>
        </div>
      </div>

      {students.map((student) => (
        <AttendanceList
          key={student.time}
          name={student.name}
          time={student.time}
        />
      ))}
    </>
  );
}

export default Homepage;
