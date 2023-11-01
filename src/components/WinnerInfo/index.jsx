import "./styles.css"

const index = () => {
  return (
    <div className="containerWinnerInfo">
        <h3>2000</h3>
        <div className="infos">
            <div className="personalInfos">
                <h4>Luís Figo 🇵🇹</h4>
                <img width={80} src="./figo.jpg" alt="" />
            </div>
            <div className="data">
                <h4>14 gols</h4>
                <h4>16 assistências</h4>
            </div>
        </div>
    </div>
  )
} 

export default index