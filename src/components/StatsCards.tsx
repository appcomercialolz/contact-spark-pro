import { Users, UserPlus, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const statsData = [
  {
    title: "Total de Leads",
    value: "1,247",
    change: "+12%",
    icon: Users,
    trend: "up"
  },
  {
    title: "Novos Contatos",
    value: "47",
    change: "+8%",
    icon: UserPlus,
    trend: "up"
  },
  {
    title: "Taxa de Conversão",
    value: "24.8%",
    change: "+3.2%",
    icon: TrendingUp,
    trend: "up"
  },
  {
    title: "Reuniões Hoje",
    value: "8",
    change: "+2",
    icon: Calendar,
    trend: "up"
  }
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in">
      {statsData.map((stat, index) => (
        <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover-lift">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-success mt-1">
              {stat.change} em relação ao mês passado
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};