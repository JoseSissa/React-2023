import { Link } from "../components/Link"

export function Home () {
    return (
      <>
        <h1>Rederizando la Home</h1>
        <Link to={'/about'} >About</Link>
      </>
    )
  }