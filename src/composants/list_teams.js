import React from 'react' ;


const TeamList = (props) => {
    const afficherList = props.teams.map((team) => {
        return (
            <tr key={team.id}>
                <td> {team.name}</td>
                 <td>{team.mj}</td>
                  <td>{team.g}</td>
                   <td>{team.n}</td>
                    <td>{team.p}</td>
                     <td>{team.pts}</td>
            </tr>
        )
    })

    return (

        <table className="table table-striped">
            <thead>
                <th>Name</th>
                 <th>MJ</th>
                  <th>G</th>
                   <th>N</th>
                    <th>P</th>
                     <th>PTS</th>
            </thead>
            <tbody>
                {afficherList}
            </tbody>
        </table>
    )
}

export default TeamList;