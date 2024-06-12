import { openDB } from "./api/sqlite";
import { CarElement } from "../components/CarElement";
import { Container } from "../components/Container";

export default async function Home() {
  const data = await fetchCars()
  return (
    <main>
      <Container>
      <div>
        {data.map((e, i) => <CarElement key={i} data={e}/>)}
      </div>
      </Container>
      
    </main>
  );
}


async function fetchCars() {
  const db = await openDB()
  const data = await db.all('SELECT * FROM cars')
  return data
}