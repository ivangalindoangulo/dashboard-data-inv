// Ejemplo de uso en una vista o componente del dashboard
import { SimpleBarChart } from '@/components/charts/BarChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// ... otras importaciones ...

export function Reports() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      {/* ... otras tarjetas de tu dashboard ... */}

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Gráfica de ECharts</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
          {/* Aquí insertas tu componente de ECharts */}
          <SimpleBarChart />
        </CardContent>
      </Card>

      {/* ... más contenido ... */}
    </div>
  );
}