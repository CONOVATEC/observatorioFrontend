import { ParsedUrlQuery } from 'querystring';

/* Filtrar el post de la api.Devuelve el la imagen o el contendido  */

export const getInfoData = (data: any, query: ParsedUrlQuery, type: string) => {
  const post = (data?.data as Array<any>)?.find(
    ({ id }) => String(id) === String(query.id)
  );

  if (type === 'imagen') return post.imagen;
  else if (type === 'content') return post.content;
  else return 'no se encuentra disponible el dato';
};
