export default function Header () {
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
              <a href="#"><ion-icon name="paper-plane-outline"></ion-icon></a>
              <a href="#"><ion-icon name="compass-outline"></ion-icon></a>
              <a href="#"><ion-icon name="heart-outline"></ion-icon></a>
              <a href="#"><ion-icon name="person-outline"></ion-icon></a>
            </div>
        </div>  
      </header>
    );
}