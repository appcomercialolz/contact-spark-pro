import { Bell, Search, User, Menu, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const Header = () => {
  return (
    <>
      {/* Alert sobre Supabase */}
      <Alert className="m-4 border-primary bg-accent">
        <Database className="h-4 w-4" />
        <AlertDescription className="text-sm">
          <strong>Conecte ao Supabase</strong> para ativar login, banco de dados e todas as funcionalidades do CRM.
          <Button variant="link" className="p-0 h-auto ml-2 text-primary font-medium">
            Conectar agora
          </Button>
        </AlertDescription>
      </Alert>

      <header className="bg-white border-b border-border shadow-soft">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CRM Pro
            </h1>
          </div>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar clientes, empresas..."
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};