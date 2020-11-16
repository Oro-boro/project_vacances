import "./interface-result.styles.css";

function InterfaceResult() {
  return (
    <div>
      <form className="InterfaceResult">
        <p>Interface-Result</p>

        <p>
          <input type="button" value="Modifier" id="Supprimer" tabindex="3" />
        </p>
        <p>
          <input type="submit" value="Ajouter" id="Ajouter" tabindex="4" />
        </p>
      </form>
    </div>
  );
}

export default InterfaceResult;
