export default async function getData(input = {}) {
  const response = await fetch('http://localhost:4000/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input)
  });

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error)
  };
 
  return data.data
}

