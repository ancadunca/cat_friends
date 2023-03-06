import { Link, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

function InfoPage() {

    //cod
  const navigate = useNavigate();

  const goToList = ()=>{
    navigate("/cats")
  }

  return (
    <>
      <h1>This is info page!</h1>
      <Link to="/cats">
        <Button>Mergi la lista!</Button>
      </Link>
      <Button color="primary" onClick={goToList}>Mergi la lista JS!</Button>
      {/* este recomandat link, deoarece google ajunge la el mai rapid */}
    </>
  );
}

export default InfoPage;
