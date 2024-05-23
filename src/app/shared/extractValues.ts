// this function we get the data from url, page number and search term
export default function extractValues(url: any) {
  const firstWordMatch = url.match(/^[^?]+/); // Match everything up to the first `?`
  const filteredSearch = firstWordMatch ? firstWordMatch[0] : null;

  const queryParamMatch = url.match(/=(.*?)\?/); // Match everything between `=` and `?`
  const queryParam = queryParamMatch ? queryParamMatch[1] : null;

  return { filteredSearch, queryParam };
}
