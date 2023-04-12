import {question} from 'readline-sync';

/**
 * Entrada: O cliente paga uma entrada. No minimo 30% do valor do veiculo.
 * Saida: Planeja um valor final, após a ultima parcela do financiamento, que será pago de no máximo 30%. 
 *  a saída tem uma correção pela inflação, a juro simples, para corrigir o valor. 
 * O restante sera financiado normalmente, com taxa mensal 1,87% ao mes.
 * IOF é aplicado no valor financiado.
 * 0,38% no valor financiado + 0,1118% ao dia (em juros simples) no valor financiado
 * 
 * O valor da parcela seja no máximo:
 * - 30% da renda do comprador, caso servidor privado
 * - 35% da renda do comprador, caso servidor publico
 * 
 * Pedir dados:
 * Valor do veiculo; (R$)
 * Renda do comprador; (R$)
 * Se é servidor publico ou privado
 * valor da entrada (R$)
 * percentual para deixar para saída (%)
 * em quantos meses parcelar o saldo devedor
 * qual a taxa de juros do financiamento (%)
 * inflação do mes (%)
 * 
 * -----
 * verificar se podemos prosseguir (condições mínimas)
 * mostrando detalhes como: valor de entrada (% - R$)
 * valor a ser financiado sem IOF (% - R$)
 * 
 */