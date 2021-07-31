import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>('')
  const { searchRepositories } = useActions()
  const {data, error, loading} = useTypedSelector((state: any) => state.repositories)


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchRepositories(term)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)}/>
        <button>search</button>
      </form>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {!loading && !error && data.map((name:string) => <div key={name}>{name}</div>)}
    </div>
  )
}

export default RepositoriesList;