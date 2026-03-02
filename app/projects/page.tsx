import Card from "@/components/Card";
export default function Projects(){
    return(
<main className="h-screen w-screen  bg-amber-950 flex items-center flex-col gap-4">
    <h1>Meus projetos</h1>

    <Card src="/logotipo.png"
     title="site de contrato Forja BJ"
     description="É um site teste que eu e um colega fizemos para 
     buscar vagas de emprego de forma prática e rápida."
     url="https://github.com/joaovsilva1008/site-de-contratos-Forja-B-J" 
     />
    <Card src="/media.gif"
    title="Média"
    description="É um site que calcula 
    a média de uma valor desejado pelo o usuário." 
    url="https://github.com/joaovsilva1008/joao_jeferson_media"
    />
    <Card src="/cal.jpg"
    title="calculadora-forjA "
    description="calculadora feita com useState(controle de estado de variável)"
    url="https://github.com/joaovsilva1008/calculadora-forjA"
    />
</main>
    );
}