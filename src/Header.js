export default function Header () {
  const names = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];  
  return (

      <header>
        <div class="header-container">
            <div class="logo-container">
              <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
              <img src="./img/Rectangle 4.png" alt="" />
              <a href="#"><img src="./midiaInstagram/logo.png" alt="" id="logo-name-img" /></a>
            </div>
            <input type="text" id="search-input" placeholder="Pesquisar" />
            <div class="actions-container">
              {names.map(iconName => <ion-icon name={iconName}></ion-icon>)}
            </div>
        </div>  
      </header>
    );
}