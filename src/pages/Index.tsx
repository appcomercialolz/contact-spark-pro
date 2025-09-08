import { Header } from "@/components/Header";
import { StatsCards } from "@/components/StatsCards";
import { LeadsTable } from "@/components/LeadsTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Dashboard
          </h2>
          <p className="text-muted-foreground">
            Visão geral das suas vendas e relacionamentos com clientes
          </p>
        </div>

        <StatsCards />
        <LeadsTable />
      </main>
    </div>
  );
};

export default Index;