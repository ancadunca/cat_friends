import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CatPage() {
  let { idCat } = useParams();
  const [cat, setCat] = useState(null);

  useEffect(() => {
    if (cat === null || idCat !== undefined) {
      fetch(`https://jsonplaceholder.typicode.com/users/${idCat}`)
        .then((response) => response.json())
        .then((catData) => {
          console.log(catData);
          setCat(catData);
        });
    }
  }, [idCat]);

  // functia se ruleaza cand ce este in [] se modifica
  // cand [] e goala, se apeleaza odata

  console.log(idCat);
  return (
    <>
      {cat !== null ? (
        <>
          <h1>{cat.name}</h1>
          <h2>{cat.email}</h2>
        </>
      ) : (
        <>Loading......</>
      )}
    </>
  );
}

export default CatPage;
