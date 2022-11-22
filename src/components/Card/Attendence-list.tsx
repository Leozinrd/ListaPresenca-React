import "./styles/lista-presenca.css";
import "./styles/presenca__pessoa.css";

export type CardProps = {
  name: string;
  time: string;
};

function AttendanceList(list: CardProps) {
  return (
    <div className="lista-presenca">
      <section className="presenca__pessoa">
        <p className="pessoa__nome">{list.name}</p>
        <p className="pessoa__horario">{list.time}</p>
      </section>
    </div>
  );
}

export default AttendanceList;
