import "./styles.css"
import WinnerInfo from "../WinnerInfo"

const index = () => {
  return (
    <div>
        <WinnerInfo year={2000} name={"Luís Figo"} country={"🇵🇹"} img={"./figo.jpg"} goals={14} assists={14}/>
        <WinnerInfo year={2001} name={"Michael Owen"} country={"🏴󠁧󠁢󠁥󠁮󠁧󠁿"} img={"./michaelowen.png"} goals={24} assists={8}/>
        <WinnerInfo year={2002} name={"Ronaldo"} country={"󠁧🇧🇷"} img={"./ronaldo.png"} goals={7} assists={2}/>
        <WinnerInfo year={2003} name={"Pavel Nedved"} country={"🇨🇿󠁧"} img={"./pavel.png"} goals={14} assists={11}/>
        <WinnerInfo year={2004} name={"Andriy Shevchenko"} country={"🇺🇦"} img={"./andriy.png"} goals={29} assists={4}/>
    </div>
  )
}

export default index