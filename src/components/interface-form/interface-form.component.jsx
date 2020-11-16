import "./interface-form.styles.css";

function InterfaceForm() {
  return (
    <div className="InterfaceForm">
      <h1>Vacances</h1>
      <form>
        <p>
          <label for="Ville" class="obligatoire">
            Ville de départ :{" "}
          </label>
          <input
            type="text"
            name="Ville"
            id="Ville"
            tabindex="1"
            placeholder="Champ obligatoire"
            required
          />
        </p>
        <p>
          <input type="submit" value="Envoi" id="Envoi" tabindex="2" />
        </p>
      </form>
      <form>
        <legend>Planification</legend>
        <p>
          <label for="Ville" class="obligatoire">
            &nbsp; Ville suivante : &nbsp;
          </label>
          <input
            type="text"
            name="Ville"
            id="Ville"
            tabindex="41"
            placeholder="Champ obligatoire"
            required
          />
        </p>
        <p>
          <label for="Km" class="obligatoire">
            &nbsp; A : &nbsp;
          </label>
          <input
            type="number"
            name="Km"
            id="Km"
            tabindex="3"
            placeholder="Champ obligatoire"
            required
          />
        </p>
        <p>&nbsp; kilometres &nbsp;</p>
        <p>
          <input type="submit" value="Envoi" id="Envoi" tabindex="5" />
        </p>
      </form>
    </div>
  );
}

export default InterfaceForm;
