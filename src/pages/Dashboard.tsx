
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const residentRiskData = [
    { id: 1, name: "Patient ID: 4872", risk: "high" },
    { id: 2, name: "Patient ID: 3561", risk: "high" },
    { id: 3, name: "Patient ID: 2198", risk: "medium" },
    { id: 4, name: "Patient ID: 7634", risk: "medium" },
    { id: 5, name: "Patient ID: 9125", risk: "low" },
    { id: 6, name: "Patient ID: 5487", risk: "low" },
  ];

  const recentAlerts = [
    { id: 1, patient: "Patient ID: 4872", time: "10:23 AM", type: "High Risk" },
    { id: 2, patient: "Patient ID: 3561", time: "09:45 AM", type: "Unusual Movement" },
    { id: 3, patient: "Patient ID: 2198", time: "08:30 AM", type: "Medium Risk" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      
      {/* Risk Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <RiskSummaryCard title="High Risk Residents" count={2} />
        <RiskSummaryCard title="Medium Risk Residents" count={2} />
        <RiskSummaryCard title="Low Risk Residents" count={2} />
      </div>

      {/* Residents Risk Levels */}
      <Card className="p-4">
        <h2 className="text-xl font-bold mb-4">Resident Risk Levels</h2>
        <div className="space-y-4">
          {residentRiskData.map((resident) => (
            <div key={resident.id} className="flex items-center space-x-4 border-b border-gray-200 pb-2">
              <div className="flex-1">{resident.name}</div>
              <RiskBadge risk={resident.risk} />
              <button className="border border-gray-400 rounded px-3 py-1">View</button>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Alerts */}
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recent Alerts</h2>
          <button className="border border-gray-400 rounded px-3 py-1">View All</button>
        </div>
        <div className="space-y-3">
          {recentAlerts.map((alert) => (
            <div key={alert.id} className="flex items-center justify-between border-b border-gray-200 pb-2">
              <div>
                <div className="font-medium">{alert.patient}</div>
                <div className="text-sm">{alert.time}</div>
              </div>
              <div className="border border-gray-400 rounded px-3 py-1">{alert.type}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Facility Overview */}
      <Card className="p-4">
        <h2 className="text-xl font-bold mb-4">Facility Overview</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span>Overall Risk Level</span>
              <span>Moderate</span>
            </div>
            <Progress value={45} className="h-2 bg-gray-200" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>Device Connection Status</span>
              <span>92%</span>
            </div>
            <Progress value={92} className="h-2 bg-gray-200" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>Alert Response Rate</span>
              <span>87%</span>
            </div>
            <Progress value={87} className="h-2 bg-gray-200" />
          </div>
        </div>
      </Card>
    </div>
  );
};

interface RiskSummaryCardProps {
  title: string;
  count: number;
}

const RiskSummaryCard = ({ title, count }: RiskSummaryCardProps) => (
  <Card className={`p-4 border-2 border-gray-300`}>
    <h3 className="text-lg font-medium">{title}</h3>
    <p className="text-3xl font-bold mt-2">{count}</p>
  </Card>
);

interface RiskBadgeProps {
  risk: string;
}

const RiskBadge = ({ risk }: RiskBadgeProps) => {
  let bgColor = "";
  
  switch (risk) {
    case "high":
      bgColor = "bg-gray-300 border-2 border-gray-500";
      break;
    case "medium":
      bgColor = "bg-gray-200 border border-gray-400";
      break;
    case "low":
      bgColor = "bg-gray-100 border border-gray-300";
      break;
    default:
      bgColor = "bg-gray-100";
  }
  
  return (
    <div className={`px-3 py-1 rounded-md ${bgColor}`}>
      {risk.charAt(0).toUpperCase() + risk.slice(1)}
    </div>
  );
};

export default Dashboard;
