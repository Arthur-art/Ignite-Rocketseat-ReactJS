import { useContext } from "react"
import { useTransactions } from "../../hooks/useTransactions"
import { Container } from "./style"

export const TransactionsTable = () => {

    const { transaction } = useTransactions()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transaction ? transaction.map((value) => {
                        return <>
                            <tr key={value.id}>
                                <td>{value.title}</td>
                                <td className={value.type}>{value.type}</td>
                                <td>{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(value.valueMoney)}</td>
                                <td>{value.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR')
                                    .format(new Date(value.createdAt))}</td>
                            </tr>
                        </>
                    }) : "Carregando..."}
                </tbody>
            </table>
        </Container>
    )
}