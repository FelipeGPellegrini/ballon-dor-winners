import "./styles.css"
import WinnerInfo from "../WinnerInfo"

const index = () => {
  return (
    <div className="containerPageWinners">
      <WinnerInfo year={2000} name={"Luís Figo"} country={"🇵🇹"} img={"./figo.jpg"} goals={14} assists={14} />
      <WinnerInfo year={2001} name={"Michael Owen"} country={"🏴󠁧󠁢󠁥󠁮󠁧󠁿"} img={"./michaelowen.png"} goals={24} assists={8} />
      <WinnerInfo year={2002} name={"Ronaldo"} country={"󠁧🇧🇷"} img={"./ronaldo.png"} goals={7} assists={2} />
      <WinnerInfo year={2003} name={"Pavel Nedved"} country={"🇨🇿󠁧"} img={"./pavel.png"} goals={14} assists={11} />
      <WinnerInfo year={2004} name={"Andriy Shevchenko"} country={"🇺🇦"} img={"./andriy.png"} goals={29} assists={4} />
      <WinnerInfo year={2005} name={"Ronaldinho"} country={"🇧🇷"} img={"./ronaldinho.jpg"} goals={33} assists={15} />
      <WinnerInfo year={2006} name={"Fabio Cannavaro"} country={"🇮🇹"} img={"./cannavaro.jpg"} goals={2} assists={0} />
      <WinnerInfo year={2007} name={"Kaká"} country={"🇧🇷"} img={"./kaka.jpg"} goals={23} assists={17} />
      <WinnerInfo year={2008} name={"Cristiano Ronaldo"} country={"🇵🇹"} img={"./ronaldo.jpg"} goals={42} assists={8} />
      <WinnerInfo year={2009} name={"Lionel Messi"} country={"🇦🇷"} img={"./messi.jpg"} goals={41} assists={18} />
      <WinnerInfo year={2010} name={"Lionel Messi"} country={"🇦🇷"} img={"./messi.jpg"} goals={53} assists={20} />
      <WinnerInfo year={2011} name={"Lionel Messi"} country={"🇦🇷"} img={"./messi.jpg"} goals={59} assists={21} />
      <WinnerInfo year={2012} name={"Lionel Messi"} country={"🇦🇷"} img={"./messi.jpg"} goals={91} assists={22} />
      <WinnerInfo year={2013} name={"Cristiano Ronaldo"} country={"🇵🇹"} img={"./ronaldo.jpg"} goals={69} assists={17} />
      <WinnerInfo year={2014} name={"Cristiano Ronaldo"} country={"🇵🇹"} img={"./ronaldo.jpg"} goals={61} assists={22} />
      <WinnerInfo year={2015} name={"Lionel Messi"} country={"🇦🇷"} img={"./messi.jpg"} goals={52} assists={26} />
      <WinnerInfo year={2016} name={"Cristiano Ronaldo"} country={"🇵🇹"} img={"./ronaldo.jpg"} goals={51} assists={15} />
      <WinnerInfo year={2017} name={"Cristiano Ronaldo"} country={"🇵🇹"} img={"./ronaldo.jpg"} goals={53} assists={14} />
      <WinnerInfo year={2018} name={"Luka Modrić"} country={"🇭🇷"} img={"./modric.jpg"} goals={5} assists={10} />
      <WinnerInfo year={2019} name={"Lionel Messi"} country={"🇦🇷"} img={"./messi.jpg"} goals={50} assists={20} />
      <WinnerInfo year={2021} name={"Lionel Messi"} country={"🇦🇷"} img={"./messi.jpg"} goals={41} assists={19} />
      <WinnerInfo year={2022} name={"Karim Benzema"} country={"🇫🇷"} img={"./benzema.jpg"} goals={30} assists={11} />
      <WinnerInfo year={2023} name={"Lionel Messi"} country={"🇦🇷"} img={"./messi.jpg"} goals={32} assists={25} />
    </div>
  )
}

export default index