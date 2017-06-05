import React from 'react' ;

const CompetitionDetail = ({competition}) => {

    if(!competition) {
        return  <div className="alert alert-info">
                    <strong>Info!</strong> Selectionnes une compétition pour voir le détail !
                </div>
    }
    return(
        <table className="table">
            <thead>
                <tr>
                    <td>Caption </td>
                    <td> League</td>
                    <td> Current Match day</td>
                    <td> Number of Games</td>
                    <td> Year</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                        <td>{competition.caption}</td>
                        <td>{competition.league}</td>
                        <td>{competition.currentMatchday}</td>
                        <td>{competition.numberOfGames}</td>
                        <td>{competition.year}</td>
                </tr>
            </tbody>
        </table>
    )

}


export default CompetitionDetail ;