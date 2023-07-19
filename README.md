<div align="right">
  <sub>Create in</sub>  
  
  `21/10/2022`
</div>

# Consumindo uma Api no NextJS

> Status: Concluded

## Todo List

Aplicação desevolvida com a finalidade de consumir uma API no NextJS, afim de compreender as funções `getStaticProps`, `getServerSideProps` e `getStaticPaths`, em que foi realizado uma `Todo List` ( lista de afazeres ) da API JSONplaceholder, ao qual além de listar todos os todos ainda é possivel acessar individualmente.

![todo](https://user-images.githubusercontent.com/109045257/197404421-4ab7ffeb-a531-4184-a0e6-d6109df72c21.png)

# Desenvolvimento

Desenvolvido pelo `Next JS`, ao qual foi consumido a API JSONplaceholder, em que foi feito a requisição dos `Todos` e `Comments`, listando todos e possibilitando acessa-los individualmentes, atráves das funções `getStaticProps` e `getStaticPaths` com uma rota dinâmica.

* getStaticProps

```js
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
```

* getStaticPaths

```js
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
```
