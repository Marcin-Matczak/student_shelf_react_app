import Container from "../Container/Container";
import Hero from "../Hero/Hero";
import style from "./Info.module.scss";
import { infoContent } from "../../data/dataStore";

function Info() {
  return (
    <Container>
      <main className={style.component}>
        <h1 className={style.title}>LOREM IPSUM</h1>
      </main>
      <Hero title={infoContent.title} image={infoContent.image} />
      <h2>{infoContent.subtitle}</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </Container>
  );
}

export default Info;
