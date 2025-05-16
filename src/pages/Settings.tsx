
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      <Card className="p-4">
        <h2 className="text-xl font-bold mb-4">Alert Notifications</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-2 border border-gray-300 rounded-md">
            <div>
              <div className="font-medium">Enable Predictive Alerts</div>
              <div className="text-sm">Receive notifications for predicted fall risks</div>
            </div>
            <div className="h-6 w-12 bg-gray-300 rounded-full flex items-center px-1">
              <div className="h-4 w-4 bg-white rounded-full ml-auto"></div>
            </div>
          </div>
          
          <div className="flex justify-between items-center p-2 border border-gray-300 rounded-md">
            <div>
              <div className="font-medium">Alert Sound</div>
              <div className="text-sm">Play sound when new alert is received</div>
            </div>
            <div className="h-6 w-12 bg-gray-300 rounded-full flex items-center px-1">
              <div className="h-4 w-4 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="flex justify-between items-center p-2 border border-gray-300 rounded-md">
            <div>
              <div className="font-medium">Alert Vibration</div>
              <div className="text-sm">Vibrate when new alert is received</div>
            </div>
            <div className="h-6 w-12 bg-gray-300 rounded-full flex items-center px-1">
              <div className="h-4 w-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </Card>
      
      <Card className="p-4">
        <h2 className="text-xl font-bold mb-4">Risk Thresholds</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-medium">High Risk Threshold</label>
              <div className="text-sm">75%</div>
            </div>
            <div className="h-4 w-full bg-gray-200 rounded-full relative">
              <div className="h-full rounded-full bg-gray-400" style={{ width: '75%' }}></div>
              <div className="absolute top-full right-1/4 transform translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full border-2 border-gray-400 bg-white"></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="font-medium">Medium Risk Threshold</label>
              <div className="text-sm">50%</div>
            </div>
            <div className="h-4 w-full bg-gray-200 rounded-full relative">
              <div className="h-full rounded-full bg-gray-400" style={{ width: '50%' }}></div>
              <div className="absolute top-full right-1/2 transform translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full border-2 border-gray-400 bg-white"></div>
            </div>
          </div>
          
          <div className="pt-2">
            <button className="px-4 py-2 border border-gray-400 rounded-md">
              Reset to Default
            </button>
          </div>
        </div>
      </Card>
      
      <Card className="p-4">
        <h2 className="text-xl font-bold mb-4">Wearable Devices</h2>
        <div className="space-y-4">
          <div className="p-3 border border-gray-300 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Device ID: WD-4872</div>
                <div className="text-sm">Patient ID: 4872</div>
              </div>
              <div className="px-3 py-1 bg-gray-200 rounded-md">Connected</div>
            </div>
            <Separator className="my-2" />
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-400 rounded-md text-sm">Test</button>
              <button className="px-3 py-1 border border-gray-400 rounded-md text-sm">Unpair</button>
            </div>
          </div>
          
          <div className="p-3 border border-gray-300 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Device ID: WD-3561</div>
                <div className="text-sm">Patient ID: 3561</div>
              </div>
              <div className="px-3 py-1 bg-gray-200 rounded-md">Connected</div>
            </div>
            <Separator className="my-2" />
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-400 rounded-md text-sm">Test</button>
              <button className="px-3 py-1 border border-gray-400 rounded-md text-sm">Unpair</button>
            </div>
          </div>
          
          <button className="px-4 py-2 border border-gray-400 rounded-md w-full">
            + Add New Device
          </button>
        </div>
      </Card>
      
      <Card className="p-4">
        <h2 className="text-xl font-bold mb-4">System Settings</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-2 border border-gray-300 rounded-md">
            <div>
              <div className="font-medium">Data Refresh Rate</div>
              <div className="text-sm">How often to check for new data</div>
            </div>
            <select className="border border-gray-400 rounded-md p-1">
              <option>5 minutes</option>
              <option>10 minutes</option>
              <option>15 minutes</option>
              <option>30 minutes</option>
            </select>
          </div>
          
          <div className="flex justify-between items-center p-2 border border-gray-300 rounded-md">
            <div>
              <div className="font-medium">Data Storage Period</div>
              <div className="text-sm">How long to keep historical data</div>
            </div>
            <select className="border border-gray-400 rounded-md p-1">
              <option>30 days</option>
              <option>60 days</option>
              <option>90 days</option>
              <option>180 days</option>
            </select>
          </div>
          
          <div className="pt-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md mr-2">
              Export Data
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md">
              Reset Settings
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
