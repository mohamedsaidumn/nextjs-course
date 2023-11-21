import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sadiq.png"
          alt="an image showing sadiq"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Mohamed</h1>
      <p>I blog about Web development</p>
    </section>
  );
}

export default Hero;
