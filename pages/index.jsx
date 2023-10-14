import path from "path";
import fs from "fs/promises";

import Link from "next/link";

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  console.log("(Re-)Generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  // //If the there is no data redirect to a different page.
  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: "/no-data",
  //     },
  //   };
  // }

  // //If the data length is 0 return not found page
  // if (data.products.length === 0) {
  //   return { notFound: true };
  // }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default HomePage;
