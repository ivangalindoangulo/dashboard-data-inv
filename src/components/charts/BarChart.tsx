import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts'; // Tipo para las opciones
import { cn } from "@/lib/utils" // Asumiendo que tienes la utilidad 'cn' de shadcn

interface BarChartProps {
  options: EChartsOption;
  className?: string;
}

export const BarChart: React.FC<BarChartProps> = ({ options, className }) => {
  // Configuración de base que puedes fusionar con las opciones específicas
  // Esto asegura que la gráfica es responsive y ocupa el 100% del contenedor.
  const baseOptions: EChartsOption = {
    // Aquí puedes poner configuraciones globales, como el tema.
  };

  const finalOptions = {
    ...baseOptions,
    ...options,
  };

  return (
    <div className={cn("h-[400px] w-full", className)}>
      <ReactECharts
        option={finalOptions}
        style={{ height: '100%', width: '100%' }}
        notMerge={true}
        lazyUpdate={true}
      />
    </div>
  );
};

// Componente de ejemplo para mostrar cómo se usa:
export function SimpleBarChart() {
  const chartOptions: EChartsOption = {
    title: {
      text: 'Ventas Trimestrales',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    xAxis: {
      type: 'category',
      data: ['Q1', 'Q2', 'Q3', 'Q4'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Ventas',
        type: 'bar',
        data: [120, 200, 150, 80],
        itemStyle: {
          color: '#83a5e8' // Puedes usar los colores de tu tema de Tailwind/Shadcn
        }
      },
    ],
  };

  return (
    <BarChart
      options={chartOptions}
      className="border rounded-lg p-4" // Aplica estilos de Tailwind y Shadcn
    />
  );
}