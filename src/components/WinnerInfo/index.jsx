import "./styles.css"

const index = ({year, name, country, img, goals, assists}) => {
  return (
    <div className="containerWinnerInfo">
        <h3>{year}</h3>
        <div className="infos">
            <div className="personalInfos">
                <h4>{name} {country}</h4>
                <img width={100} height={100} src={img} alt="" />
            </div>
            <div className="data">
                <h4>{goals} gols</h4>
                <h4>{assists} assistências</h4>
            </div>
        </div>
    </div>
  )
} 

export default index