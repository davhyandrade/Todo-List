import { useRouter } from "next/router";
import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function getStaticPaths() {
  let dataComments: any = {};

  await axios.get(`https://jsonplaceholder.typicode.com/comments/`).then((response) => (dataComments = response.data));

  const paths = dataComments.map((comment: { id: number }) => ({
    params: {
      id: `${comment.id}`,
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: Params) {
  let comments = {};

  const { id } = context.params;

  await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`).then((response) => (comments = response.data));

  return {
    props: {
      comments,
    },
  };
}

export default function PageId({ comments }: Params) {
  const router = useRouter();

  return (
    <div className="field-comments">
      <div key={comments.id} className="comments">
        <span>
          <span>Todo:</span>
          {comments.id}
        </span>
        <h1>{comments.name}</h1>
        <p>{comments.body}</p>
      </div>
      <button onClick={() => router.push("/todo")}>Voltar</button>
    </div>
  );
}
