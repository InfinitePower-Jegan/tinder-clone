import MatchComponent from "./MatchComponent"

const getMatches = async (): Promise<Match[]> => {
  const matches: Match[] = [{ uids: ["a", "b"] }, { uids: ["a", "c"] }, { uids: ["a", "d"] }, { uids: ["a", "e"] }]

  return new Promise((resolve) => resolve(matches))
}

export default async function Matches() {
  const matches = await getMatches()

  return (
    <div className="grid grid-cols-3 gap-4 px-4">
      {matches.map((match) => (
        // @ts-ignore
        <MatchComponent key={match.uids.toString()} match={match} />
      ))}
    </div>
  )
}
