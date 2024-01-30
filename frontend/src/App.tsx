import { gql, useQuery } from '@apollo/client'
import './App.css'

type  Character = {
  id: string;
  name: string;
  age: number;
  anime: string;
  characteristics: string;
}

const GET_USER = gql`
  query {
    Characters{
    id
    name
    age
    anime
    characteristics
  }
  }
`;

function App() {
  const {data, loading} = useQuery<{Characters: Character[]}>(GET_USER)
  
  if(loading) {
    return <p>Loading...</p>
  }
  console.log(data);
  
  return (
    <>
    <ul>
    {data?.Characters.map(Character => <li key={Character.id}>{Character.name}</li>)}
    </ul>
    </>
  )
}

export default App
