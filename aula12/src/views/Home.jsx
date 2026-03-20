import Avatar from '../components/Avatar';

export default function Home() {   
    return (
        <div className="container">
            <h1 className="text-center m-5">Bem-vindo ao meu site!</h1>
            <Avatar
                imagemDaPessoa="https://avatars.githubusercontent.com/u/12345678?v=4"
                nomeDoUsuario="caio"
            />
            <Avatar
                imagemDaPessoa="https://avatars.githubusercontent.com/u/87654321?v=4"
                nomeDoUsuario="carol"
            />
            <Avatar
                imagemDaPessoa="https://avatars.githubusercontent.com/u/11223344?v=4"
                nomeDoUsuario="imovel"
            />
        </div>
    );
}