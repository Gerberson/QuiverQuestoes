using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Questao_CShap.Questoes
{
    class Questao_02
    {
        /*
            decimal valor = 198;
            int[] cedulas = new int[] { 1, 2, 5, 10, 20, 50 };

            //Ordenando cedulas de maior parar menor
            for (int i = 0; i < cedulas.Length; i++)
            {
                int cedulaMaior = 0;
                int cedulaMenor = 0;

                for (int j = i; j < cedulas.Length; j++)
                {
                    if (cedulas[i] < cedulas[j])
                    {
                        cedulaMaior = cedulas[j];
                        cedulaMenor = cedulas[i];

                        cedulas[i] = cedulaMaior;
                        cedulas[j] = cedulaMenor;
                    }
                }
            }

            int cedulaAtual;
            int qtdCedula;
            decimal resto;

            //Procurando a menor cedula possivel dado um valor inteiro
            Console.WriteLine("CEDULAS POSSÍVEIS: " + valor);
            Console.WriteLine();
            Console.WriteLine("QUANTIDADE | CEDULAS");

            for (int i = 0; i < cedulas.Length; i++)
            {
                cedulaAtual = cedulas[i];

                if (valor / cedulaAtual >= 1)
                {
                    qtdCedula = (int)valor / cedulaAtual;
                    resto = valor % cedulaAtual;
                    valor = resto;

                    if (resto >= 0)
                    {

                        Console.WriteLine("    " + qtdCedula + "          " + cedulaAtual);

                        if (resto == 0) break;
                    }
                }
            } 
        */
    }
}
