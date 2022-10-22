import axios from "axios";
import type { NextPage } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";

export async function getStaticProps() {
  let data = {};
  const maxData = 99;

  await axios.get(`https://jsonplaceholder.typicode.com/posts/?_limit=${maxData}`).then((response) => (data = response.data));

  return {
    props: {
      data,
    },
  };
}

const Home: NextPage = ({ data }: Params) => {
  interface IData {
    title: string;
    body: string;
    id: number;
  }

  return (
    <div className="field-containers">
      {data.map((value: IData) => {
        return (
          <Link key={value.id} href={`/todo/${value.id}`}>
            <div className="container">
              <span>{value.id}</span>
              <h1>{value.title}</h1>
              <p>{value.body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
