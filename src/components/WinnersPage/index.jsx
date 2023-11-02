import "./styles.css"
import WinnerInfo from "../WinnerInfo"

const index = () => {
  return (
    <div>
        <WinnerInfo year={2000} name={"Luís Figo"} country={"🇵🇹"} img={"./figo.jpg"} goals={14} assists={14}/>
    </div>
  )
}

export default index