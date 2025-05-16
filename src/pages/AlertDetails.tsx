
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AlertDetails = () => {
  const recentAlerts = [
    { 
      id: 1, 
      patient: "Patient ID: 4872", 
      time: "10:23 AM", 
      date: "05/16/2025",
      type: "High Risk",
      status: "Unresolved"
    },
    { 
      id: 2, 
      patient: "Patient ID: 3561", 
      time: "09:45 AM", 
      date: "05/16/2025",
      type: "Movement Pattern",
      status: "Resolved"
    },
    { 
      id: 3, 
      patient: "Patient ID: 2198", 
      time: "08:30 AM", 
      date: "05/16/2025",
      type: "Medium Risk",
      status: "In Progress"
    },
    { 
      id: 4, 
      patient: "Patient ID: 4872", 
      time: "11:45 PM", 
      date: "05/15/2025",
      type: "Unusual Movement",
      status: "Resolved"
    },
    { 
      id: 5, 
      patient: "Patient ID: 7634", 
      time: "03:15 PM", 
      date: "05/15/2025",
      type: "Medium Risk",
      status: "Resolved"
    },
  ];

  const selectedAlert = {
    id: 1,
    patient: "Patient ID: 4872",
    time: "10:23 AM",
    date: "05/16/2025",
    type: "High Risk",
    status: "Unresolved",
    riskFactors: [
      "Sudden increase in nighttime activity",
      "Missed medication dose",
      "Recent fall history",
      "Change in gait pattern"
    ],
    recommendedActions: [
      "Conduct in-person check immediately",
      "Review medication compliance",
      "Assess for physical discomfort",
      "Notify nurse supervisor"
    ]
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Alert Details</h1>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-200">
          <TabsTrigger value="all" className="border border-gray-300">All Alerts</TabsTrigger>
          <TabsTrigger value="unresolved" className="border border-gray-300">Unresolved</TabsTrigger>
          <TabsTrigger value="resolved" className="border border-gray-300">Resolved</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          <Card className="p-4">
            <div className="space-y-3">
              {recentAlerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className={`flex justify-between items-center p-3 border rounded-md ${
                    alert.id === selectedAlert.id 
                      ? "border-gray-500 bg-gray-100" 
                      : "border-gray-300"
                  }`}
                >
                  <div>
                    <div className="font-medium">{alert.patient}</div>
                    <div className="text-sm">{alert.date} at {alert.time}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 bg-gray-200 rounded-md text-sm">
                      {alert.type}
                    </div>
                    <div className={`px-3 py-1 rounded-md text-sm ${
                      alert.status === "Resolved" 
                        ? "bg-gray-200" 
                        : alert.status === "In Progress"
                          ? "bg-gray-300" 
                          : "bg-gray-400"
                    }`}>
                      {alert.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="unresolved" className="mt-4">
          <Card className="p-4">
            <div className="text-center py-8">
              <h3 className="text-lg font-medium">Show unresolved alerts here</h3>
              <p className="mt-2">This tab would filter to show only unresolved alerts</p>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="resolved" className="mt-4">
          <Card className="p-4">
            <div className="text-center py-8">
              <h3 className="text-lg font-medium">Show resolved alerts here</h3>
              <p className="mt-2">This tab would filter to show only resolved alerts</p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Selected Alert Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h2 className="text-xl font-bold mb-4">Alert Details</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="font-medium">Resident:</div>
              <div>{selectedAlert.patient}</div>
              
              <div className="font-medium">Date & Time:</div>
              <div>{selectedAlert.date} at {selectedAlert.time}</div>
              
              <div className="font-medium">Alert Type:</div>
              <div>{selectedAlert.type}</div>
              
              <div className="font-medium">Status:</div>
              <div>{selectedAlert.status}</div>
            </div>
            
            <div className="p-3 border border-gray-300 rounded-md">
              <h3 className="font-medium mb-2">Risk Factors</h3>
              <ul className="list-disc pl-5">
                {selectedAlert.riskFactors.map((factor, index) => (
                  <li key={index}>{factor}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <h2 className="text-xl font-bold mb-4">Recommended Actions</h2>
          <div className="space-y-3">
            {selectedAlert.recommendedActions.map((action, index) => (
              <div key={index} className="p-2 border border-gray-300 rounded-md flex items-center gap-2">
                <input type="checkbox" className="h-5 w-5 border-gray-400" />
                <span>{action}</span>
              </div>
            ))}
            
            <div className="mt-6">
              <button className="w-full p-2 bg-gray-300 border border-gray-400 rounded-md">
                Mark Alert as Resolved
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AlertDetails;
