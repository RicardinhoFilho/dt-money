import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable(){

  useEffect(()=>{
    api.get("/transactions")
      .then((data)=> console.log(data)) 
    }
  ,[])

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
          <td>WebSite</td>
          <td className="deposit">R$12000</td>
          <td>Desenvolvimento</td>
          <td>11/05/2021</td>
        </tbody>

        <tbody>
          <td>Aluguel</td>
          <td className="withdraw">-R$1100</td>
          <td>Casa</td>
          <td>17/02/2021</td>
        </tbody>
      </table>
    </Container>
  );
}
