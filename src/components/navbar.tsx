// components/Navbar.tsx


function Navbar(){
  return (
    <header className="navbar">
      <div className="logo">Oculos do luiz</div>

      <nav>
        <a href="#">Tela principal</a>
        <a href="#">Servisos</a>
        <a href="#">loja</a>
        <a href="#">Meu Trabalho</a>
        <a href="#" className="contact">
          contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;