// src/components/charts/BarChart.tsx
import ReactECharts, { type EChartsOption } from 'echarts-for-react';
import { cn } from "@/lib/utils" // Asumiendo que tienes la utilidad 'cn' de shadcn
import { getCssVariableValue } from "@/lib/utils/get-css-variable";

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

export function SimpleBarChart() {
  // 1. Obtiene los valores de color DINÁMICOS del tema actual
  const primaryColor = getCssVariableValue('primary');
  const foregroundColor = getCssVariableValue('foreground');
  const mutedForegroundColor = getCssVariableValue('muted-foreground');

  const chartOptions: EChartsOption = {
    // ...
    // Aplica el color del texto general del tema (para tooltip, leyenda, etc.)
    textStyle: {
      color: foregroundColor,
    },
    // Fondo transparente para usar el color de fondo de la Card de Shadcn
    backgroundColor: 'transparent',
    // ...
    xAxis: {
      type: 'category',
      data: ['Q1', 'Q2', 'Q3', 'Q4'],
      axisLine: { lineStyle: { color: mutedForegroundColor } }, // Línea del eje
      axisLabel: { color: foregroundColor } // Etiquetas del eje
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: mutedForegroundColor } },
      axisLabel: { color: foregroundColor }
    },
    series: [
      {
        name: 'Ventas',
        type: 'bar',
        data: [120, 200, 150, 80],
        itemStyle: {
          color: primaryColor, // ⬅️ **¡Aquí se aplica el color principal del tema!**
        },
      },
      // Puedes usar otros colores: getCssVariableValue('secondary'), etc.
    ],
  };

  return (
    <BarChart
      options={chartOptions}
      className="border rounded-lg p-4" // Aplica estilos de Tailwind y Shadcn
    />
  );
}