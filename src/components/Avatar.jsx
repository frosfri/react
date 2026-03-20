export default function Avatar(props) {

  return (
    <div className="text-center m-3">

      <img
        src={props.imagemDaPessoa}
        alt={props.nomeDoUsuario}
        className="rounded-circle"
        width="150"
        height="150"
      />

      <h4>{props.nomeDoUsuario}</h4>

    </div>
  );

}