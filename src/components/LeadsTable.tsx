import { useState } from "react";
import { Eye, Edit, Trash2, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Dados de exemplo - em produção virão do Supabase
const mockLeads = [
  {
    id: 1,
    cliente: "João Silva",
    cargo: "CEO",
    empresa: "TechCorp",
    vendedor: "Maria Santos",
    primeiroContato: "Ligação",
    data: "2024-01-15",
    etapa: "Qualificação",
    situacao: "Interessado",
    proximoContato: "2024-01-20",
    status: "ativo"
  },
  {
    id: 2,
    cliente: "Ana Costa",
    cargo: "Diretora",
    empresa: "InnovaSoft",
    vendedor: "Pedro Lima",
    primeiroContato: "Email",
    data: "2024-01-14",
    etapa: "Proposta",
    situacao: "Negociando",
    proximoContato: "2024-01-18",
    status: "quente"
  },
  {
    id: 3,
    cliente: "Carlos Oliveira",
    cargo: "Gerente",
    empresa: "DataFlow",
    vendedor: "Maria Santos",
    primeiroContato: "WhatsApp",
    data: "2024-01-13",
    etapa: "Fechamento",
    situacao: "Pronto para fechar",
    proximoContato: "2024-01-16",
    status: "ganho"
  }
];

const statusColors = {
  ativo: "bg-primary text-primary-foreground",
  quente: "bg-warning text-warning-foreground",
  ganho: "bg-success text-success-foreground",
  perdido: "bg-destructive text-destructive-foreground"
};

export const LeadsTable = () => {
  const [filter, setFilter] = useState("todos");
  const [search, setSearch] = useState("");

  const filteredLeads = mockLeads.filter(lead => {
    const matchesFilter = filter === "todos" || lead.status === filter;
    const matchesSearch = lead.cliente.toLowerCase().includes(search.toLowerCase()) ||
                         lead.empresa.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <Card className="shadow-soft animate-slide-up">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle>Gestão de Leads</CardTitle>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Input
              placeholder="Buscar leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-64"
            />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="ativo">Ativos</SelectItem>
                <SelectItem value="quente">Quentes</SelectItem>
                <SelectItem value="ganho">Ganhos</SelectItem>
                <SelectItem value="perdido">Perdidos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Empresa</TableHead>
                <TableHead>Vendedor</TableHead>
                <TableHead>1º Contato</TableHead>
                <TableHead>Etapa</TableHead>
                <TableHead>Situação</TableHead>
                <TableHead>Próximo Contato</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeads.map((lead) => (
                <TableRow key={lead.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    <div>
                      <div>{lead.cliente}</div>
                      <div className="text-sm text-muted-foreground">{lead.cargo}</div>
                    </div>
                  </TableCell>
                  <TableCell>{lead.empresa}</TableCell>
                  <TableCell>{lead.vendedor}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {lead.primeiroContato === "Ligação" && <Phone className="h-3 w-3" />}
                      {lead.primeiroContato === "Email" && <Mail className="h-3 w-3" />}
                      {lead.primeiroContato === "WhatsApp" && <MessageCircle className="h-3 w-3" />}
                      <span className="text-sm">{lead.primeiroContato}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">{lead.data}</div>
                  </TableCell>
                  <TableCell>{lead.etapa}</TableCell>
                  <TableCell>{lead.situacao}</TableCell>
                  <TableCell>{lead.proximoContato}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[lead.status as keyof typeof statusColors]}>
                      {lead.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};