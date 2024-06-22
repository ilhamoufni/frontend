import React, { useCallback, useState } from "react";
import "./filtre.css";
import DocumentsTable from "./DocumentsTable";
import axiosInstance from "../utils/axios";

const FilterComponent = () => {
  const [filters, setFilters] = useState({
    Intitulededocument: null,
    Provinces: null,
    Communes: null,
    Centres: null,
    Situation: null,
    Phase: null,
    Bet: null,
  });

  const [filtredData, setFiltredData] = useState([]);

  const handleFilter = useCallback(async () => {
    try {
      const nonNullFilters = Object.keys(filters)
        .filter((key) => filters[key] !== null)
        .reduce((obj, key) => {
          obj[key] = filters[key];
          return obj;
        }, {});

      const res = await axiosInstance.post("/filter-documents", nonNullFilters);

      setFiltredData(res.data?.data);
    } catch (err) {
      console.log(err);
    }
  }, [filters]);

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div div className="filter-container">
      <div className="filter-section">
        <button onClick={handleFilter}>Filtrer</button>

        <h3>Filtre</h3>
        <div>
          <h4>Intitulé de document</h4>
          <label>
            <input
              type="radio"
              name="Intitulededocument"
              value="PA"
              checked={filters.Intitulededocument === "PA"}
              onChange={handleRadioChange}
            />{" "}
            PA
          </label>
          <label>
            <input
              type="radio"
              name="Intitulededocument"
              value="SDAU"
              checked={filters.Intitulededocument === "SDAU"}
              onChange={handleRadioChange}
            />{" "}
            SDAU
          </label>
          <label>
            <input
              type="radio"
              name="Intitulededocument"
              value="PDAR"
              checked={filters.Intitulededocument === "PDAR"}
              onChange={handleRadioChange}
            />{" "}
            PDAR
          </label>
        </div>

        <div className="filter-section">
          <h4>Provincess</h4>
          <select name="Provinces" onChange={handleSelectChange}>
            <option value="">Sélectionnez une Provinces</option>
            <option value="Beni Mellal">Beni Mellal</option>
            <option value="Fequih Ben Salah">Fequih Ben Salah</option>
            <option value="Khouribgua">Khouribgua</option>
            <option value="Azilal">Azilal</option>
          </select>
        </div>
        <div className="filter-section">
          <h4>Communess</h4>
          <select name="Communes" onChange={handleSelectChange}>
            <option value="">Sélectionnez une Communes</option>
            <option value="Afourar">Afourar</option>
            <option value="Agoudi N'Lkhair">Agoudi N'Lkhair</option>
            <option value="Ait Abbas">Ait Abbas</option>
            <option value="Ait Blal">Ait Blal</option>
            <option value="Ait M'hamed">Ait M'hamed</option>
            <option value="Ait Majden">Ait Majden</option>
            <option value="Ait Mazigh">Ait Mazigh</option>
            <option value="Ait Ouaarda">Ait Ouaarda</option>
            <option value="Ait Oukabli">Ait Oukabli</option>
            <option value="Ait Oumdis">Ait Oumdis</option>
            <option value="Ait Taguella">Ait Taguella</option>
            <option value="Ait Tamlil">Ait Tamlil</option>
            <option value="Anergui">Anergui</option>
            <option value="Anzou">Anzou</option>
            <option value="Azilal">Azilal</option>
            <option value="Bin El Ouidane">Bin El Ouidane</option>
            <option value="Bni Ayat">Bni Ayat</option>
            <option value="Bni Hassane">Bni Hassane</option>
            <option value="Bzou">Bzou</option>
            <option value="Demnate">Demnate</option>
            <option value="Moulay Aissa Ben Driss">
              Moulay Aissa Ben Driss
            </option>
            <option value="Foum Jemaa">Foum Jemaa</option>
            <option value="Imlil">Imlil</option>
            <option value="Isseksi">Isseksi</option>
            <option value="Ouaouizeght">Ouaouizeght</option>
            <option value="Ouaoula">Ouaoula</option>
            <option value="Rfala">Rfala</option>
            <option value="Sidi Boulkhalf">Sidi Boulkhalf</option>
            <option value="Sidi Yacoub">Sidi Yacoub</option>
            <option value="Tabant">Tabant</option>
            <option value="Tabarouchet">Tabarouchet</option>
            <option value="Tabia">Tabia</option>
            <option value="Tagleft">Tagleft</option>
            <option value="Tamda Noumercid">Tamda Noumercid</option>
            <option value="Tanant">Tanant</option>
            <option value="Taounza">Taounza</option>
            <option value="Tidili Fetouaka">Tidili Fetouaka</option>
            <option value="Tiffert N'Ait Hamza">Tiffert N'Ait Hamza</option>
            <option value="Tifni">Tifni</option>
            <option value="Tilougguite">Tilougguite</option>
            <option value="Timoulilt">Timoulilt</option>
            <option value="Tisqui">Tisqui</option>
            <option value="Zaouit Ahansal"> Zaouit Ahansal</option>
            <option value="Aghbala">Aghbala</option>
            <option value="Ait Oum El Bekht">Ait Oum El Bekht</option>
            <option value="Béni Mellal">Béni Mellal</option>
            <option value="	Dir El Ksiba">Dir El Ksiba</option>
            <option value="El Ksiba">El Ksiba</option>
            <option value="Foum El Anceur">Foum El Anceur</option>
            <option value="Foum Oudi">Foum Oudi</option>
            <option value="Guettaya">Guettaya</option>
            <option value="Kasba Tadla">Kasba Tadla</option>
            <option value="Naour">Naour</option>
            <option value="Ouled Gnaou">Ouled Gnaou</option>
            <option value="Ouled M'Barek">Ouled M'Barek</option>
            <option value="Ouled Said L'Oued">Ouled Said L'Oued</option>
            <option value="Ouled Yaich">Ouled Yaich</option>
            <option value="Ouled Youssef">Ouled Youssef</option>
            <option value="Semguet">Semguet</option>
            <option value="Sidi Jabeur">Sidi Jabeur</option>
            <option value="Taghzirt">Taghzirt</option>
            <option value="Tanougha">Tanougha</option>
            <option value="Tizi N'Isly">Tizi N'Isly</option>
            <option value="Zaouiat Cheikh">Zaouiat Cheikh</option>
            <option value="Bni Chegdal">Bni Chegdal</option>
            <option value="Bni Oukil">Bni Oukil</option>
            <option value="Bradia">Bradia</option>
            <option value="Dar Ouled Zidouh">Dar Ouled Zidouh</option>
            <option value="Fquih Ben Salah">Fquih Ben Salah</option>
            <option value="Had Boumoussa">Had Boumoussa</option>
            <option value="Hel Marbaa">Hel Marbaa</option>
            <option value="	Khalfia">Khalfia</option>
            <option value="Krifate">Krifate</option>
            <option value="Ouled Ayad">Ouled Ayad</option>
            <option value="Ouled Bourahmoune">Ouled Bourahmoune</option>
            <option value="Ouled naceur">Ouled naceur</option>
            <option value="Ouled Zmam">Ouled Zmam</option>
            <option value="Sidi Aissa Ben Ali">Sidi Aissa Ben Ali</option>
            <option value="Sidi Hammadi">Sidi Hammadia</option>
            <option value="Souk Sebt Od Nemma">Souk Sebt Od Nemma</option>
            <option value="Ait Ammar">Ait Ammar</option>
            <option value="Bejaad">Bejaad</option>
            <option value="Bir Mezoui">Bir Mezoui</option>
            <option value="Bni Bataw">Bni Bataw</option>
            <option value="Bni Smir">Bni Smir</option>
            <option value="Beni Ikhlef">Beni Ikhlef</option>
            <option value="Bni Zrantel">Bni Zrantel</option>
            <option value="Boujniba">Boujniba</option>
            <option value="Boukhres">Boukhres</option>
            <option value="Boulanouar">Boulanouar</option>
            <option value="Braksa">Braksa</option>
            <option value="Chougrane">Chougrane</option>
            <option value="El Foqra">El Foqra</option>
            <option value="Hattane">Hattane</option>
            <option value="Kasbat Troch">Kasbat Troch</option>
            <option value="Khouribga">Khouribga</option>
            <option value="Lagfaf">Lagfaf</option>
            <option value="Lagnadiz">Lagnadiz</option>
            <option value="M'fassis">M'fassis</option>
            <option value="Maadane">Maadane</option>
            <option value="Oued Zem">Oued Zem</option>
            <option value="Ouled Abdoune">Ouled Abdoune</option>
            <option value="Ouled Aissa">Ouled Aissa</option>
            <option value="Ouled Azzouz">Ouled Azzouz</option>
            <option value="Ouled Fennane">Ouled Fennane</option>
            <option value="Ouled Ftata">Ouled Ftata</option>
            <option value="Ouled Gouaouch">Ouled Gouaouch</option>
            <option value="Rouached">Rouached</option>
            <option value="Tachraft">Tachraft</option>
            <option value="Ain Kaicher">Ain Kaicher</option>
          </select>
        </div>
        <div className="filter-section">
          <h4>Centress</h4>
          <select name="Centres" onChange={handleSelectChange}>
            <option value="">Sélectionnez un Centres</option>
            <option value="	Afourar">Afourar</option>
            <option value="Agoudi N'Lkhair">Agoudi N'Lkhair</option>
            <option value="	Ait Abbas">Ait Abbas</option>
            <option value="	Ait Blal">Ait Blal</option>
            <option value="	Ait M'hamed">Ait M'hamed</option>
            <option value="Ait Majden">Ait Majden</option>
            <option value="Ait Mazigh">Ait Mazigh</option>
            <option value="Ait Ouaarda">Ait Ouaarda</option>
            <option value="Ait Oukabli">Ait Oukabli</option>
            <option value="Ait Oumdis">Ait Oumdis</option>
            <option value="Ouzoud">Ouzoud</option>
            <option value="Zaouit Tanghmelte">Zaouit Tanghmelte</option>
            <option value="Ait Tamlil">Ait Tamlil</option>
            <option value="Anergui">Anergui</option>
            <option value="Anzou">Anzou</option>
            <option value="Azilal">Azilal Zone Ouest</option>
            <option value="Bin El Ouidane">Bin El Ouidane</option>
            <option value="Bni Ayat">Bni Ayat</option>
            <option value="Bni Hassane">Bni Hassane</option>
            <option value="Bzou">Bzou</option>
            <option value="Demnate">Demnate</option>
            <option value="Ait Attab">Ait Attab</option>
            <option value="Foum Jemaa">Foum Jemaa</option>
            <option value="Imlil">Imlil</option>
            <option value="Isseksi">Isseksi</option>
            <option value="Ouaouizeght">Ouaouizeght</option>
            <option value="Ouaoula">Ouaoula</option>
            <option value="Centres Rfala">Rfala</option>
            <option value="Sidi Boulkhalf">Sidi Boulkhalf</option>
            <option value="Sidi Yacoub">Sidi Yacoub</option>
            <option value="Tabant">Tabant</option>
            <option value="Tabarouchet">Tabarouchet</option>
            <option value="Tabia">Tabia</option>
            <option value="Tagleft">Tagleft</option>
            <option value="Tamda Noumercid">Tamda Noumercid</option>
            <option value="Tanant">Tanant</option>
            <option value="Douar El Mellal">Douar El Mellal</option>
            <option value="Taounza">Taounza</option>
            <option value="Tidili Fetouaka">Tidili Fetouaka</option>
            <option value="Tiffert N'Ait Hamza">Tiffert N'Ait Hamza</option>
            <option value="Tifni">Tifni</option>
            <option value="Tilougguite">Tilougguite</option>
            <option value="Timoulilt">Timoulilt</option>
            <option value="Tisqui">Tisqui</option>
            <option value="Zaouit Ahansal"> Zaouit Ahansal</option>
            <option value="Aghbala">Aghbala</option>
            <option value="Ait Oum El Bekht">Ait Oum El Bekht</option>
            <option value="Béni Mellal">Béni Mellal</option>
            <option value="Grand Béni Mellal"> Grand Béni Mellal</option>
            <option value="Ghrom Laalam">Ghrom Laalam</option>
            <option value="	El Ksiba et partie de sa zone périphirique">
              El Ksiba et partie de sa zone périphirique
            </option>
            <option value="Foum El Anceur">Foum El Anceur</option>
            <option value="	Adouz- Tamachat">Adouz- Tamachat</option>
            <option value="Foum Oudi">Foum Oudi</option>
            <option value="Guettaya">Guettaya</option>
            <option value="Kasba-Tadla et partie de sa zone périphérique">
              Kasba-Tadla et partie de sa zone périphérique
            </option>
            <option value="Laayayta">Laayayta</option>
            <option value="Ouled M'Barek">Ouled M'Barek</option>
            <option value="Ouled Said L'Oued">Ouled Said L'Oued</option>
            <option value="	Ouled Yaich">Ouled Yaich</option>
            <option value="Zouair">Zouair</option>
            <option value="Ouled Youssef">Ouled Youssef</option>
            <option value="Semguet">Semguet</option>
            <option value="Sidi Jabeur">Sidi Jabeur</option>
            <option value="	Ouled Si Mimoun">Ouled Si Mimoun</option>
            <option value="Fariata">Fariata</option>
            <option value="Taghzirt">Taghzirt</option>
            <option value="Ikhourba">Ikhourba</option>
            <option value="Tanougha">Tanougha</option>
            <option value="Tizi N'Isly">Tizi N'Isly</option>
            <option value="Zaouiat Cheikh">Zaouiat Cheikh</option>
            <option value="Bni Chegdal">Bni Chegdal</option>
            <option value="Bni Oukil">Bni Oukil</option>
            <option value="Hal Sous">Hal Sous</option>
            <option value="Bradia">Bradia</option>
            <option value="Ouled Ali">Ouled Ali</option>
            <option value="Ouled Driss">Ouled Driss</option>
            <option value="Dar Ouled Zidouh">Dar Ouled Zidouh</option>
            <option value="Fquih Ben Salah">Fquih Ben Salah</option>
            <option value="Had Boumoussa">Had Boumoussa</option>
            <option value="Hal Marbaa">Hal Marbaa</option>
            <option value="Ouled M'Barek">Ouled M'Barek</option>
            <option value="	Ouled Abdellah">Ouled Abdellah</option>
            <option value="Ouled Hassoune">Ouled Hassoune</option>
            <option value="Douar Jdid">Douar Jdid</option>
            <option value="Ouled Ayad">Ouled Ayad</option>
            <option value="	Ouled Bouaazza">Ouled Bouaazza</option>
            <option value="Ouled Bourahmoune">Ouled Bourahmoune</option>
            <option value="Ouled Naceur">Ouled Naceur</option>
            <option value="	Ouled Zmam">Ouled Zmam</option>
            <option value="Sidi Aissa Ben Ali">Sidi Aissa Ben Ali</option>
            <option value="Ouled Attou">Ouled Attou</option>
            <option value="	Ouled Said">Ouled Said</option>
            <option value="Souk Sebt">Souk Sebt</option>
            <option value="Ait Ammar">Ait Ammar</option>
            <option value="Bejaad">Bejaad</option>
            <option value="Bir Mezoui">Bir Mezoui</option>
            <option value="Bni Bataw">Bni Bataw</option>
            <option value="Bni Smir">Bni Smir</option>
            <option value="Beni Ikhlef">Beni Ikhlef</option>
            <option value="Bni Zrantel">Bni Zrantel</option>
            <option value="Boujniba">Boujniba</option>
            <option value="Boukhres">Boukhres</option>
            <option value="Boulanouar">Boulanouar</option>
            <option value="Braksa">Braksa</option>
            <option value="Chougrane">Chougrane</option>
            <option value="El Foqra">El Foqra</option>
            <option value="Hattane">Hattane</option>
            <option value="Kasbat Troch">Kasbat Troch</option>
            <option value="Khouribga">Khouribga</option>
            <option value="Lagfaf">Lagfaf</option>
            <option value="Lagnadiz">Lagnadiz</option>
            <option value="M'fassis">M'fassis</option>
            <option value="Maadane">Maadane</option>
            <option value="Oued Zem">Oued Zem</option>
            <option value="Ouled Abdoune">Ouled Abdoune</option>
            <option value="Réserve stratégique au Centres d'Ouled Abdoune">
              Réserve stratégique au Centres d'Ouled Abdoune
            </option>
            <option value="Ouled Aissa">Ouled Aissa</option>
            <option value="Ouled Azzouz">Ouled Azzouz</option>
            <option value="Ouled Fennane">Ouled Fennane</option>
            <option value="Ouled Ftata">Ouled Ftata</option>
            <option value="Ouled Gouaouch">Ouled Gouaouch</option>
            <option value="Rouached">Rouached</option>
            <option value="Tachraft">Tachraft</option>
            <option value="Ain Kaicher">Ain Kaicher</option>
          </select>
        </div>
        <div className="filter-section">
          <h4>Situation de document</h4>
          <label>
            <input
              type="radio"
              name="Situation"
              value="Homologué"
              checked={filters.Situation === "Homologué"}
              onChange={handleRadioChange}
            />{" "}
            Homologué
          </label>
          <label>
            <input
              type="radio"
              name="Situation"
              value="En cours"
              checked={filters.Situation === "En cours"}
              onChange={handleRadioChange}
            />{" "}
            En cours
          </label>
        </div>
        <div>
          <div className="filter-section">
            <h4>Phase</h4>
            <label>
              <input
                type="radio"
                name="Phase"
                value="Lancement"
                checked={filters.Phase === "Lancement"}
                onChange={handleRadioChange}
              />{" "}
              Lancement
            </label>
            <label>
              <input
                type="radio"
                name="Phase"
                value="Dossier à soumettre au CTL"
                checked={filters.Phase === "Dossier à soumettre au CTL"}
                onChange={handleRadioChange}
              />{" "}
              Dossier à soumettre au CTL
            </label>
            <label>
              <input
                type="radio"
                name="Phase"
                value="Phase rapport diagnostic OA et projet PA"
                checked={
                  filters.Phase === "Phase rapport diagnostic OA et projet PA"
                }
                onChange={handleRadioChange}
              />{" "}
              Phase rapport diagnostic OA et projet PA
            </label>
            <label>
              <input
                type="radio"
                name="Phase"
                value="Phase préliminaire"
                checked={filters.Phase === "Phase préliminaire"}
                onChange={handleRadioChange}
              />{" "}
              Phase préliminaire
            </label>
            <label>
              <input
                type="radio"
                name="Phase"
                value="Concertation réglementaire'EP/DC'"
                checked={filters.Phase === "Concertation réglementaire'EP/DC'"}
                onChange={handleRadioChange}
              />{" "}
              Concertation réglementaire'EP/DC'
            </label>
            <label>
              <input
                type="radio"
                name="Phase"
                value="DC"
                checked={filters.Phase === "DC"}
                onChange={handleRadioChange}
              />{" "}
              DC
            </label>
            <label>
              <input
                type="radio"
                name="Phase"
                value="Plan d'action 2024"
                checked={filters.Phase === "Plan d'action 2024"}
                onChange={handleRadioChange}
              />{" "}
              Plan d'action 2024
            </label>
            <label>
              <input
                type="radio"
                name="Phase"
                value="Phase après CTL"
                checked={filters.Phase === "Phase après CTL"}
                onChange={handleRadioChange}
              />{" "}
              Phase après CTL
            </label>
            <label>
              <input
                type="radio"
                name="Phase"
                value="Phase EP/DC"
                checked={filters.Phase === "Phase EP/DC"}
                onChange={handleRadioChange}
              />{" "}
              Phase EP/DC
            </label>
            <label>
              <input
                type="radio"
                name="Phase"
                value="Phase projet du PDAR à soumettre à l'avis du DPA et DPEE"
                checked={
                  filters.Phase ===
                  "Phase projet du PDAR à soumettre à l'avis du DPA et DPEE"
                }
                onChange={handleRadioChange}
              />{" "}
              Phase projet du PDAR à soumettre à l'avis du DPA et DPEE
            </label>
            <label>
              <input
                type="radio"
                name="Phase"
                value='Réctification de la phase 1 "rapport diagnostic, OA et projet PA"'
                checked={
                  filters.Phase ===
                  'Réctification de la phase 1 "rapport diagnostic, OA et projet PA"'
                }
                onChange={handleRadioChange}
              />{" "}
              Réctification de la phase 1 "rapport diagnostic, OA et projet PA"
            </label>
            <label>
              <input
                type="radio"
                name="Phase"
                value="Réctification après commission centrale"
                checked={
                  filters.Phase === "Réctification après commission centrale"
                }
                onChange={handleRadioChange}
              />{" "}
              Réctification après commission centrale
            </label>
            <label>
              <input
                type="radio"
                name="Phase"
                value="commission centrale"
                checked={filters.Phase === "commission centrale"}
                onChange={handleRadioChange}
              />{" "}
              commission centrale
            </label>
            <label>
              <input
                type="radio"
                name="Phase"
                value='Mission 1 de la phase 2 "dossier à soumettre au CTL"'
                checked={
                  filters.Phase ===
                  'Mission 1 de la phase 2 "dossier à soumettre au CTL"'
                }
                onChange={handleRadioChange}
              />{" "}
              Mission 1 de la phase 2 "dossier à soumettre au CTL"
            </label>
            <label>
              <input
                type="radio"
                name="Phase"
                value="Concertation DPA ET DPEE"
                checked={filters.Phase === "Concertation DPA ET DPEE"}
                onChange={handleRadioChange}
              />{" "}
              Concertation DPA ET DPEE
            </label>
          </div>
          <h4>Bet</h4>
          <label>
            <input
              type="radio"
              name="Bet"
              value="Bet"
              checked={filters.Bet === "Bet"}
              onChange={handleRadioChange}
            />{" "}
            Bet
          </label>
          <label>
            <input
              type="radio"
              name="Bet"
              value="AUBM"
              checked={filters.Bet === "AUBM"}
              onChange={handleRadioChange}
            />{" "}
            AUBM
          </label>
        </div>
      </div>
      <div className="filter-section" style={{ flex: "3" }}>
        {/* Ici, vous pouvez afficher le tableau filtré */}
        <DocumentsTable data={filtredData} style={{ marginLeft: "0px" }} />
      </div>
    </div>
  );
};

export default FilterComponent;
