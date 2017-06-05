import React from 'react' ;


const CompetitionList = (props) => {
    const affficherCompetion = props.competitions.map((competition) => {
        return (
        <li  onClick={() => props.onCompetitionSelect(competition)} className="list-group-item" key={competition.id}> {competition.caption}</li>
        )
    })

    return (
            <ul className="list-group">
                    {affficherCompetion}
            </ul>

    )

}


export default CompetitionList;