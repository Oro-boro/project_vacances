import "./interface-form.styles.css";

function Interface() {
  return (
    <div>
      <h1>Vacances</h1>
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
      <form>
        <legend>Planification</legend>
        <p>
          <label for="Km" class="obligatoire">
            &nbsp; Kilometres : &nbsp;
          </label>
          <input
            type="text"
            name="Km"
            id="Km"
            tabindex="2"
            placeholder="Champ obligatoire"
            required
          />
        </p>

        <p>
          <label for="Ville" class="obligatoire">
            &nbsp; entre la ville suivante : &nbsp;
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
          <input type="submit" value="Envoi" id="Envoi" tabindex="3" />
        </p>
      </form>
    </div>
  );
}

export default Interface;
