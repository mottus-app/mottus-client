import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Flex, Heading, Link, Text, Code } from "@chakra-ui/react";
import { useHelloQuery } from "../graphql/generated";
import { withApollo } from "../apollo/new";
import getStaticApolloProps from "../apollo/new/getStaticApolloProps";

function Home() {
  const { data } = useHelloQuery();
  console.log("data:", data);
  if (!data?.hello) return null;
  return (
    <Box
      as="main"
      minH="100vh"
      d="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      px="2"
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{data.hello}</h1>
      <main className={styles.main}>
        <Heading as="h1" m="0" fontSize="6xl" textAlign="center" lineHeight="5">
          Welcome to{" "}
          <Link
            color="blue.500"
            textDecor="none"
            _hover={{ textDecor: "underline" }}
            _focus={{ textDecor: "underline" }}
            _active={{ textDecor: "underline" }}
            href="https://nextjs.org"
          >
            Next.js!
          </Link>
        </Heading>
        <Text mt="6" lineHeight="5" fontSize="2xl">
          Get started by editing <Code>pages/index.tsx</Code>{" "}
        </Text>

        {/* <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <Flex
        as="footer"
        w="100%"
        h="100%"
        borderTopColor="gray.50"
        borderTopWidth="1px"
        borderTopStyle="solid"
        justifyContent="center"
        alignItems="center"
      >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </Flex>
    </Box>
  );
}

export default withApollo({ ssr: false })(Home);

export const getStaticProps = getStaticApolloProps<{}, {}>(Home);
