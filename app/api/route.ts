import { baseUrl, fetchApi } from "@/utils/fetchApi";


export async function propertiesForSale() {
  const propertiesForSale = await fetchApi({
    url: `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`,
  });
  return propertiesForSale
}
export async function propertiesForRent(){
  const propertiesForRent = await fetchApi({
    url: `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`,
  });
  return propertiesForRent
}
  

  