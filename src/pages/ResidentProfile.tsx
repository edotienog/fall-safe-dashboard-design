
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResidentProfile = () => {
  const { id } = useParams();

  const placeholderChartBlock = (
    <div className="bg-gray-200 border border-gray-300 h-48 rounded-lg flex items-center justify-center">
      [Movement Pattern Chart Placeholder]
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Resident Profile</h1>
        <button className="border-2 border-gray-400 rounded-md px-4 py-1">
          Back to Dashboard
        </button>
      </div>

      {/* Resident Info */}
      <Card className="p-4">
        <div className="flex items-center space-x-4">
          <div className="h-24 w-24 bg-gray-300 border border-gray-400 rounded-md flex items-center justify-center">
            [Photo]
          </div>
          <div>
            <h2 className="text-xl font-bold">Patient ID: {id || '1'}</h2>
            <div className="grid grid-cols-2 gap-y-1 gap-x-4 mt-2">
              <div>Age: 78</div>
              <div>Room: 203</div>
              <div>Gender: Female</div>
              <div>Status: Active</div>
            </div>
          </div>
          <div className="ml-auto p-4 border-2 border-gray-300 rounded-md">
            <div className="text-lg font-bold mb-1">Fall Risk Score</div>
            <div className="text-3xl">78/100</div>
            <div className="text-sm">(High Risk)</div>
          </div>
        </div>
      </Card>

      {/* Tabs for different sections */}
      <Tabs defaultValue="activity" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-200">
          <TabsTrigger value="activity" className="border border-gray-300">Activity</TabsTrigger>
          <TabsTrigger value="patterns" className="border border-gray-300">Movement Patterns</TabsTrigger>
          <TabsTrigger value="medications" className="border border-gray-300">Medications</TabsTrigger>
          <TabsTrigger value="history" className="border border-gray-300">Fall History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="activity" className="mt-4">
          <Card className="p-4">
            <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {placeholderChartBlock}
              
              <div className="border-t border-gray-300 pt-4">
                <h4 className="font-medium mb-2">Activity Summary</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Daily Movement</span>
                      <span>Low</span>
                    </div>
                    <Progress value={30} className="h-2 bg-gray-200" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Restlessness</span>
                      <span>Medium</span>
                    </div>
                    <Progress value={50} className="h-2 bg-gray-200" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Sleep Quality</span>
                      <span>Poor</span>
                    </div>
                    <Progress value={35} className="h-2 bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="patterns" className="mt-4">
          <Card className="p-4">
            <h3 className="text-lg font-bold mb-4">Movement Patterns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {placeholderChartBlock}
              {placeholderChartBlock}
            </div>
            <div className="mt-4 p-4 border border-gray-300 rounded-md">
              <h4 className="font-medium mb-2">Analysis</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Increased nighttime bathroom visits (2-3 times)</li>
                <li>Unsteady gait detected during morning hours</li>
                <li>Reduced movement after medication administration</li>
                <li>Signs of confusion when navigating to bathroom</li>
              </ul>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="medications" className="mt-4">
          <Card className="p-4">
            <h3 className="text-lg font-bold mb-4">Current Medications</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-3 border border-gray-300 rounded-md">
                  <div className="font-medium">Medication Name {i}</div>
                  <div className="flex justify-between mt-1 text-sm">
                    <span>Dosage: 50mg</span>
                    <span>Frequency: Twice daily</span>
                    <span>Last Updated: 05/10/2025</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 border border-gray-300 rounded-md bg-gray-100">
              <h4 className="font-medium mb-2">Medication Risk Factors</h4>
              <ul className="list-disc pl-5">
                <li>Contains sedative properties</li>
                <li>May cause dizziness</li>
                <li>Potential impact on balance</li>
              </ul>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="history" className="mt-4">
          <Card className="p-4">
            <h3 className="text-lg font-bold mb-4">Fall History</h3>
            <div className="space-y-4">
              <div className="p-3 border-2 border-gray-400 rounded-md">
                <div className="flex justify-between">
                  <span className="font-medium">05/01/2025</span>
                  <span className="px-2 bg-gray-200 rounded">Moderate</span>
                </div>
                <p className="mt-2">Fall occurred in bathroom. No serious injuries. Assistance provided.</p>
              </div>
              <div className="p-3 border border-gray-300 rounded-md">
                <div className="flex justify-between">
                  <span className="font-medium">04/15/2025</span>
                  <span className="px-2 bg-gray-200 rounded">Minor</span>
                </div>
                <p className="mt-2">Near fall while getting out of bed. Caught by caregiver.</p>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Risk Factors and Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h3 className="text-lg font-bold mb-4">Risk Factors</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>History of falls</li>
            <li>Multiple medications</li>
            <li>Gait instability</li>
            <li>Cognitive impairment</li>
            <li>Nighttime bathroom usage</li>
          </ul>
        </Card>
        
        <Card className="p-4">
          <h3 className="text-lg font-bold mb-4">Recommended Actions</h3>
          <div className="space-y-2">
            <div className="p-2 border border-gray-300 rounded flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 border-gray-400" />
              <span>Regular bathroom assistance</span>
            </div>
            <div className="p-2 border border-gray-300 rounded flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 border-gray-400" />
              <span>Medication review by doctor</span>
            </div>
            <div className="p-2 border border-gray-300 rounded flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 border-gray-400" />
              <span>Install additional handrails</span>
            </div>
            <div className="p-2 border border-gray-300 rounded flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 border-gray-400" />
              <span>Physical therapy assessment</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ResidentProfile;
