import styles from "../styles/Resultado.module.css"
import { useRouter } from "next/router"
import Estatistica from "../components/Estatistica"
import Botao from "../components/Botao"

export default function Resultado() {

  const router = useRouter()

  const total = Number(router.query.total)
  const certas = Number(router.query.certas)
  const percentual = Math.round((certas / total) * 100)

  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <div style={{
        display: 'flex',
      }}>
        <Estatistica texto="Perguntas" valor={total} />
        <Estatistica
          texto="Respostas certas"
          valor={certas}
          corFundo="#9CD2A4"
        />
        <Estatistica
          texto="Percentual"
          valor={`${percentual}%`}
          corFundo="#DE6A33"
        />
      </div>
      <Botao href="/" texto="Tentar Novamente" />
    </div>
  )
}
