import {
  CardHeader,
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { DollarSign , Users, Boxes, PackagePlus} from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className=" grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Total de Vendas de 90 Dias</CardDescription>

            <CardContent>
              <p className="text-base sm:text-xl font-bold justify-between ">
                R$ 50.000,00
              </p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Novos Clientes
              </CardTitle>
              <Users className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Novos Clientes em 30 Dias</CardDescription>

            <CardContent>
              <p className="text-base sm:text-xl font-bold justify-between ">
                20
              </p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
               Novos Pedidos
              </CardTitle>
              <PackagePlus className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Pedidos de Hoje</CardDescription>

            <CardContent>
              <p className="text-base sm:text-xl font-bold justify-between ">
                5
              </p>
            </CardContent>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
               Total de Pedidos 
              </CardTitle>
              <Boxes className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Total de Pedidos em 30 Dias</CardDescription>

            <CardContent>
              <p className="text-base sm:text-xl font-bold justify-between ">
                200
              </p>
            </CardContent>
          </CardHeader>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row">



      </section>
    </main>
  );
}
