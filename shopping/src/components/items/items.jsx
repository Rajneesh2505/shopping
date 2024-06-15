
export const ItemList = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    if (!response.ok) { 
      console.log("HTTP-Status: " + response.status);
      return;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data: ", error);
  }
};
