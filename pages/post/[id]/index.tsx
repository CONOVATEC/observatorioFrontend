import { Box, CircularProgress, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useGetPostsApiQuery } from "../../../src/redux/posts/slice";
import DefaultLayout from "../../../src/views/DefaultLayout";

import { getInfoData } from "../../../src/adapters/getInfoData";
import styles from "./styles.module.css";
export default function Post() {
  const { query } = useRouter();
  const { data, isLoading } = useGetPostsApiQuery(null);

  // const postBody = getInfoData(data, query, "content");
  /* 	const backgroundImage = getInfoData(data, query,'imagen') */

  const backgroundImage =
    "url(https://res.cloudinary.com/df5nwnlnu/image/upload/v1671075063/observatorio/PIEZAS%20GR%C3%81FICAS%20-%20OBSERVATORIO%20JOVEN/NOTICIAS/PORTADA_PRINCIPAL_DE_NOTICIAS_velaqw.png)";

  return (
    <DefaultLayout>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <>
          <Flex
            w={"full"}
            h={{ base: "50vh", md: "70vh", lg: "80vh" }}
            backgroundImage={backgroundImage}
            backgroundSize={{ base: "cover", md: "100% 100%" }}
            backgroundPosition={"center left"}
          />

          {/*<Box*/}
          {/*  className={styles.postContainer}*/}
          {/*  dangerouslySetInnerHTML={{*/}
          {/*    __html: postBody,*/}
          {/*  }}*/}
          {/*/>*/}
        </>
      )}
    </DefaultLayout>
  );
}
