using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Questao_CShap.Questoes
{
    class Questao_06
    {
        /*
            int qtdDeCartelas = 20;
            int numerosPorCartela = 10;
            int repeticaoPorNumero = 4;
            int linhasPreencidas = 0;


            int[,] cartelas = new int[qtdDeCartelas, numerosPorCartela];
            Random randomm = new Random();
            int[,] numerosRepetidos = new int[50, 2];

            //Gerar cartela
            for (int i = 0; i < qtdDeCartelas; i++)
            {
                for (int j = 0; j < numerosPorCartela; j++)
                {
                    int numero = randomm.Next(61);
                    int qtdNumeroEncontrado = encontrarNumero(numero);

                    while (qtdNumeroEncontrado > repeticaoPorNumero)
                    {
                        numero = randomm.Next(61);
                        qtdNumeroEncontrado = encontrarNumero(numero);
                    };

                    cartelas[i, j] = numero;
                }
            }

            //Percorrer cartelas
            for (int i = 0; i < qtdDeCartelas; i++)
            {
                Console.Write("CARTELA " + (i + 1) + " = ");

                for (int j = 0; j < numerosPorCartela; j++)
                {
                    Console.Write(cartelas[i, j] + " ");
                }

                Console.WriteLine();
            }

            //Validar numeros randômicos
            int encontrarNumero(int numero)
            {

                if (numerosRepetidos[0, 0] == 0)
                {
                    numerosRepetidos[0, 0] = numero;
                    numerosRepetidos[0, 1] = 1;
                    linhasPreencidas = 1;
                }
                else
                {
                    int numeroArmazenado;
                    int qtdArmazenada;
                    int numeroEncontrado = 0;

                    for (int i = 0; i < linhasPreencidas; i++)
                    {
                        for (int j = 0; j < 1; j++)
                        {
                            numeroArmazenado = numerosRepetidos[i, j];
                            qtdArmazenada = numerosRepetidos[i, j + 1];

                            if (numeroArmazenado == numero && qtdArmazenada < numerosPorCartela)
                            {
                                numerosRepetidos[i, j + 1] = qtdArmazenada + 1;
                                numeroEncontrado = numerosRepetidos[i, j + 1];
                                return numeroEncontrado;
                            }
                        }
                    }

                    if (numeroEncontrado == 0 && linhasPreencidas < 49)
                    {
                        int linha = linhasPreencidas;
                        int coluna = 0;
                        numerosRepetidos[linha, coluna] = numero;
                        numerosRepetidos[linha, coluna + 1] = 1;
                        linhasPreencidas += 1;
                        numeroEncontrado = 1;

                        return numeroEncontrado;
                    }
                }

                return 0;
            }
        */
    }
}
